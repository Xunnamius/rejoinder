/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

import assert from 'node:assert';
import { isPromise } from 'node:util/types';

import { $instances, debugFactory } from '@-xun/debug';

import type { Entry } from 'type-fest';

import type {
  DebuggerExtension,
  ExtendedDebugger,
  InternalDebugger,
  UnextendableInternalDebugger
} from '@-xun/debug';

// eslint-disable-next-line unicorn/prevent-abbreviations
const extendedLoggerFnPropsWeakMap = new WeakMap<Function, Function>();

export { $instances };

/**
 * Decorate a function `T` with an initial potentially-optional `tags`
 * parameter.
 */
export type WithExtendedParameters<
  T extends (...args: any[]) => any,
  Optional = true
> = Optional extends true
  ? [tags?: string[], ...Parameters<T>]
  : [tags: string[], ...Parameters<T>];

/**
 * Decorate a function-object `T` with an initial potentially-optional `tags`
 * parameter without excluding any of its non-function own object properties.
 */
export type WithTagSupport<T extends (...args: any[]) => any, Optional = true> = ((
  ...args: WithExtendedParameters<T, Optional>
) => ReturnType<T> | undefined) & {
  [P in keyof T]: T[P];
};

/**
 * An `ExtendedDebugger` function-object decorated with support for an initial
 * `tags` parameter.
 */
export type ExtendedLoggerParameters = WithExtendedParameters<ExtendedDebugger, false>;

/**
 * These color codes correspond to a reddish color on the console.
 * https://gist.github.com/JBlond/2fea43a3049b38287e5e9cefc87b2124?permalink_comment_id=4481079#gistcomment-4481079
 */
export const ansiRedColorCodes = [1, 9, 88, 124, 160, 196];

/**
 * These color codes correspond to a yellowish color on the console.
 * https://gist.github.com/JBlond/2fea43a3049b38287e5e9cefc87b2124?permalink_comment_id=4481079#gistcomment-4481079
 */
export const ansiYellowColorCodes = [3, 11, 94, 136, 178, 214, 220];

/**
 * These color codes are tough to see on my personal terminals, or they're red (which are only used for errors) or yellow (only used for warnings).
 */
export const ansiBannedColorCodes = [
  16,
  17,
  18,
  19,
  20,
  21,
  52,
  53,
  54,
  55,
  56,
  57,
  233,
  234,
  235,
  236,
  237,
  238,
  ...ansiRedColorCodes,
  ...ansiYellowColorCodes
];

/**
 * Keeps track of our various "logger" (i.e. debug) instances and their
 * associated metadata. Also keeps track of those tags for which we disable
 * output.
 */
export const metadata = {
  logger: [] as (ExtendedLogger | UnextendableInternalLogger)[],
  debugger: [] as (ExtendedDebugger | UnextendableInternalDebugger)[],
  denylist: new Set<string>()
};

/**
 * A function that resets the internal logger cache. Essentially, calling this
 * function causes rejoinder to forget any disabled tags or loggers created
 * prior.
 */
export function resetInternalState() {
  metadata.debugger = [];
  metadata.logger = [];
  metadata.denylist.clear();
}

/**
 * Transforms an {@link ExtendedDebugger} into an {@link ExtendedLogger}.
 */
export function makeExtendedLogger(
  extendedDebugger: ExtendedDebugger,
  type: Exclude<LoggerType, LoggerType.All>,
  /**
   * This function will be called with various arguments of unknown type when
   * default (e.g. stdout) output should be sent to the user, such as when
   * `::newline(...)` is called.
   */
  underlyingDefaultLogFn: NonNullable<InternalDebugger['log']>,
  /**
   * This function will be called with various arguments of unknown type when
   * alternate (e.g. stderr) output should be sent to the user, such as when
   * `::newline(..., 'alternate')` and `::error(...)`, `::warn(...)`,
   * `::message(...)`, etc are called.
   */
  underlyingAlternateLogFn: NonNullable<InternalDebugger['log']> = underlyingDefaultLogFn
): ExtendedLogger {
  const baseLoggerFn = decorateWithTagSupport(extendedDebugger, 2);
  const baseNewlineFn = decorateWithTagSupport(
    (outputMethod: Parameters<ExtendedLogger['newline']>[0]) => {
      if (extendedLogger.enabled) {
        const logMethod =
          outputMethod === 'alternate'
            ? underlyingAlternateLogFn
            : // ? This is guaranteed to be defined below.
              extendedLogger.log!;

        logMethod('');
      }
    },
    1
  ) as typeof extendedLogger.newline;

  // ? These are properties that have been redefined (set) in higher contexts.
  // ? We track them so that we can allow the redefined value to be returned
  // ? in our proxy's getter, which prevents stack overflow errors.
  const redefinedProperties = new Set<PropertyKey>();

  const extendedLogger = new Proxy(extendedDebugger as ExtendedLogger, {
    apply(
      _target,
      _this: unknown,
      args: Parameters<WithTagSupport<typeof extendedDebugger>>
    ) {
      return baseLoggerFn(...args);
    },
    get(target, property: PropertyKey, proxy: ExtendedLogger) {
      if (!redefinedProperties.has(property)) {
        if (property === 'extend') {
          // ? We need to keep this here since, if someone redefines this
          // ? property, we need to ensure we're only referencing the original
          // ? to prevent stack overflow errors.
          const realExtend = extendedDebugger.extend;
          return function (...args: Parameters<ExtendedLogger['extend']>) {
            return withMetadataTracking(
              type,
              makeExtendedLogger(
                realExtend(...args),
                type,
                // ? This is guaranteed to be defined below.
                extendedLogger.log!,
                underlyingAlternateLogFn
              )
            );
          };
        }

        if (property === 'newline') {
          return function (...args: Parameters<ExtendedLogger['newline']>) {
            baseNewlineFn(...args);
          };
        }
      }

      const value: unknown = target[property as keyof typeof target];

      if (typeof value === 'function') {
        // ? We do Proxy inception here because, if value is an internal
        // ? debugger instance, we need to ensure (1) its properties are
        // ? accessible and (2) each property always returns the same instance
        // ? (i.e. "===" strict equality).

        // ? Note that ExtendedDebugger instances already ship with this
        // ? functionality, and our job here is to ensure ExtendedLoggers
        // ? maintain API parity.

        if (!extendedLoggerFnPropsWeakMap.has(value)) {
          extendedLoggerFnPropsWeakMap.set(
            value,
            new Proxy(value, {
              apply(_target, _this: unknown, args: unknown[]) {
                // ? This is "this-recovering" code.
                const returnValue = value.apply(target, args);
                // ? Whenever we'd return a vanilla debug instance, return the
                // ? wrapper Proxy instead.

                /* istanbul ignore next */
                return isPromise(returnValue)
                  ? returnValue.then((realReturnValue) =>
                      maybeReturnProxy(realReturnValue)
                    )
                  : maybeReturnProxy(returnValue);
              }
            })
          );
        }

        // ? Ensure the same respective strictly-equal object is always returned
        return extendedLoggerFnPropsWeakMap.get(value);
      }

      return value;

      /* istanbul ignore next */
      function maybeReturnProxy(returnValue: unknown) {
        return returnValue === target ? proxy : returnValue;
      }
    },
    set(target, property_, updatedValue) {
      const property = property_ as keyof typeof target;

      redefinedProperties.add(property);
      (target[property] as any) = updatedValue;

      return true;
    }
  });

  // ? Decorate the pre-extended instances (error, warn, etc) with tag support.
  for (const [key, instance] of Object.entries(extendedDebugger[$instances]).filter(
    (o): o is LoggerExtensionEntry => o[0] !== '$log'
  )) {
    if (key === 'error') {
      // ? Ensure "error" outputs are always red (color = 1 === red).
      // @ts-expect-error: external types are incongruent
      instance.color = 1;
    } else if (key === 'warn') {
      // ? Ensure "error" outputs are always yellow (color = 3 === dark yellow).
      // @ts-expect-error: external types are incongruent
      instance.color = 3;
    } else {
      ensureInstanceHasOkColor(instance);
    }

    // ? Ensure our sub-loggers are using the correct underlying logging
    // ? function.
    instance.log = underlyingAlternateLogFn;

    // ? Decorate the sub-logger with tag support.
    extendedLogger[$instances][key] = decorateWithTagSupport(instance, 2);
  }

  // ? Ensure the special $log circular reference points back to us instead of
  // ? the original debug logger.
  extendedLogger[$instances].$log = extendedLogger;

  // ? Ensure our extendedLogger is using the correct underlying logging
  // ? function.
  // ! extendedLogger.log must be defined!
  extendedLogger.log = underlyingDefaultLogFn;

  // ? Ensure our extendedLogger and its sub-loggers are enabled (generates
  // ? output) by default.
  extendedLogger.enabled = true;

  ensureInstanceHasOkColor(extendedLogger);

  return extendedLogger;

  type LoggerExtensionEntry = Entry<
    Omit<(typeof extendedDebugger)[typeof $instances], '$log'>
  >;

  function ensureInstanceHasOkColor(
    instance: ExtendedLogger | UnextendableInternalDebugger
  ) {
    const instanceColor = Number.parseInt(instance.color) || 0;

    if (ansiBannedColorCodes.includes(instanceColor)) {
      // ? Ensure only "error"/"warn" outputs can be red/orange respectively

      const hiddenInternals = debugFactory as typeof debugFactory & { colors: number[] };
      assert(Array.isArray(hiddenInternals.colors));

      const oldAvailableColors = hiddenInternals.colors;
      hiddenInternals.colors = oldAvailableColors.filter((c) => {
        return !ansiBannedColorCodes.includes(c);
      });

      try {
        const selectedColor = hiddenInternals.selectColor(extendedDebugger.namespace);
        assert(typeof selectedColor === 'number' || typeof selectedColor === 'string');

        // @ts-expect-error: external types are incongruent
        instance.color = selectedColor;
      } finally {
        hiddenInternals.colors = oldAvailableColors;
      }
    }
  }
}

/**
 * Allows logging to be disabled via tags at the fine-grain message level. Set
 * `trapdoorArgLength` to the number of params necessary to trigger denylisting.
 */
export function decorateWithTagSupport<T extends (...args: any[]) => any>(
  fn: T,
  trapdoorArgsMinLength: number
): WithTagSupport<T> {
  return new Proxy(fn as WithTagSupport<T>, {
    apply(_target, _this: unknown, args: Parameters<typeof fn>) {
      if (args.length >= trapdoorArgsMinLength && Array.isArray(args[0])) {
        if (args[0].some((tag) => metadata.denylist.has(tag))) {
          return undefined;
        }

        return fn(...args.slice(1));
      }

      return fn(...args);
    }
  });
}

/**
 * Make rejoinder's internals aware of a new logger instance and its
 * pre-extended sub-instances.
 *
 * **This function MUST be invoked, and ONLY AFTER `::log` and
 * {@link $instances} have been configured on `logger`!** This allows all of
 * rejoinder's global enable/disable functions to work.
 */
export function withMetadataTracking(
  type: LoggerType.GenericOutput,
  logger: ExtendedLogger
): ExtendedLogger;
export function withMetadataTracking(
  type: LoggerType.DebugOnly,
  logger: ExtendedDebugger
): ExtendedDebugger;
export function withMetadataTracking(
  type: Exclude<LoggerType, LoggerType.All>,
  logger: ExtendedDebugger | ExtendedLogger
): ExtendedDebugger | ExtendedLogger;
export function withMetadataTracking(
  type: Exclude<LoggerType, LoggerType.All>,
  logger: ExtendedDebugger | ExtendedLogger
) {
  metadata[type].push(...Object.values(logger[$instances]));
  return logger;
}

/**
 * Make rejoinder's internals forget a logger instance and its pre-extended
 * sub-instances.
 *
 * **This function MUST be invoked for descendant loggers, and ONLY AFTER
 * creating a new generic/debug `logger` that will be extended with additional
 * functionality but BEFORE passing that finalized `logger` to
 * {@link withMetadataTracking}!** This prevents memory leaks.
 */
export function withoutMetadataTracking(
  type: LoggerType.GenericOutput,
  logger: ExtendedLogger
): ExtendedLogger;
export function withoutMetadataTracking(
  type: LoggerType.DebugOnly,
  logger: ExtendedDebugger
): ExtendedDebugger;
export function withoutMetadataTracking(
  type: Exclude<LoggerType, LoggerType.All>,
  logger: ExtendedDebugger | ExtendedLogger
): ExtendedDebugger | ExtendedLogger;
export function withoutMetadataTracking(
  type: Exclude<LoggerType, LoggerType.All>,
  logger: ExtendedDebugger | ExtendedLogger
) {
  const instancesToExclude = Object.values(logger[$instances]);

  metadata[type] = metadata[type].filter(
    (instance) => !instancesToExclude.includes(instance)
  );

  return logger;
}

/**
 * Recursively patches {@link ExtendedDebugger.extend} so that all debugger
 * instances are properly tracked.
 */
export function withPatchedExtend(instance: ExtendedDebugger) {
  const oldExtend = instance.extend;

  // ? We don't use a Proxy here because it's overkill; we don't need access to
  // ? the original extend function's properties. A side effect of not using a
  // ? Proxy is that we need to recursively patch the extend function (below)
  instance.extend = (...args: Parameters<ExtendedDebugger['extend']>) => {
    return withMetadataTracking(
      LoggerType.DebugOnly,
      withPatchedExtend(oldExtend(...args))
    );
  };

  return instance;
}

/**
 * Returns all keys in an object's {@link $instances} property with proper
 * types.
 */
export function get$instancesKeys<T extends Pick<ExtendedDebugger, typeof $instances>>(
  logger: T
) {
  return Object.keys(logger[$instances]) as (keyof (typeof logger)[typeof $instances])[];
}

/**
 * An enum representing the types of loggers classified by output target.
 */
export enum LoggerType {
  All = 'all',
  GenericOutput = 'logger',
  DebugOnly = 'debugger'
}

/**
 * An instance of {@link UnextendableInternalDebugger} that that belongs to an
 * {@link ExtendedLogger}.
 */
export interface UnextendableInternalLogger extends UnextendableInternalDebugger {
  /**
   * Send an optionally-formatted message to output.
   */
  (...args: Parameters<ExtendedDebugger>): ReturnType<ExtendedDebugger>;
  /**
   * Send a tagged optionally-formatted message to output.
   */
  (...args: ExtendedLoggerParameters): ReturnType<ExtendedDebugger>;
}

/**
 * A wrapper around {@link ExtendedDebugger } representing the extension from
 * mere "debug" logger to general purpose "logger".
 */
export interface ExtendedLogger extends _ExtendedLogger<ExtendedLogger> {
  /**
   * Send an optionally-formatted message to output.
   */
  (...args: Parameters<ExtendedDebugger>): ReturnType<ExtendedDebugger>;
  /**
   * Send a tagged optionally-formatted message to output.
   */
  (...args: ExtendedLoggerParameters): ReturnType<ExtendedDebugger>;
  /**
   * Send a blank newline to output.
   *
   * `outputMethod` determines if the newline will be output via the default
   * output method or the alternate output method. This parameter only has an
   * effect when using certain logger backends and typically corresponds to
   * stdout (`"default"`) and stderr (`"alternate"`).
   */
  newline(
    ...args: [
      ...WithExtendedParameters<ExtendedDebugger['newline'], false>,
      outputMethod?: 'default' | 'alternate'
    ]
  ): ReturnType<ExtendedDebugger['newline']>;
  /**
   * Send a blank newline to output.
   *
   * `outputMethod` determines if the newline will be output via the default
   * output method or the alternate output method. This parameter only has an
   * effect when using certain logger backends and typically corresponds to
   * stdout (`"default"`) and stderr (`"alternate"`).
   */
  newline(
    ...args: [outputMethod?: 'default' | 'alternate']
  ): ReturnType<ExtendedDebugger['newline']>;
  /**
   * Creates a new instance by appending `namespace` to the current instance's
   * namespace. The new instance will also inherit the current instance's `log`
   * function, if one exists, though **the two functions will not be strictly
   * equal.**
   */
  extend: (...args: Parameters<ExtendedDebugger['extend']>) => ExtendedLogger;
}
type _ExtendedLogger<T> = Omit<
  ExtendedDebugger,
  keyof DebuggerExtension | 'newline' | 'extend'
> &
  DebuggerExtension<UnextendableInternalLogger, T>;
