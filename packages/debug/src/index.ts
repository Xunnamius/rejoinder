// {@symbiote/notExtraneous supports-color}
import util from 'node:util';
import { isPromise, isSymbolObject } from 'node:util/types';

import internalDebuggerFactory from 'debug';

import type { Debug as _Debug, Debugger as _Debugger } from 'debug';
import type { Merge } from 'type-fest';

// * https://nodejs.org/api/util.html#util_util_inspect_defaultoptions
util.inspect.defaultOptions.maxArrayLength = Infinity;
util.inspect.defaultOptions.maxStringLength = Infinity;

type _InternalDebuggerNoExtends = Omit<InternalDebugger, 'extend'>;

/**
 * Represents a property on a "root" {@link ExtendedDebugger} instance that
 * returns an array of its {@link UnextendableInternalDebugger} sub-instances
 * (e.g. "error", "warn", etc). The array will also include the root
 * {@link ExtendedDebugger} instance.
 */
export const $instances = Symbol.for('@xunnamius:debug-builtin-sub-instances');

/**
 * A type representing the property names of the sub-instances made available
 * by {@link $instances}.
 *
 * @internal
 */
export type InstanceKey = keyof With$instances<ExtendedDebugger>[typeof $instances];

/**
 * The base `Debug` interface coming from the [debug](https://npm.im/debug)
 * package.
 *
 * @internal
 */
export interface InternalDebug extends _Debug {
  /**
   * Create and return a new {@link InternalDebugger} instance.
   */
  (...args: Parameters<_Debug>): InternalDebugger;
}

/**
 * The base `Debugger` interface coming from the [debug](https://npm.im/debug)
 * package.
 */
export interface InternalDebugger extends __Debugger {
  /**
   * Send an optionally-formatted message to output.
   */
  (...args: Parameters<_Debugger>): void;
}

// ? Fix a bug in the types (::log is currently optional in the upstream source)
type __Debugger = Omit<_Debugger, 'log'> & { log?: _Debugger['log'] };

/**
 * An instance of {@link InternalDebugger} that cannot be extended via
 * `InternalDebugger.extend`.
 */
export interface UnextendableInternalDebugger extends InternalDebugger {
  extend: (...args: Parameters<InternalDebugger['extend']>) => never;
}

/**
 * An {@link InternalDebug} factory interface that returns
 * {@link ExtendedDebugger} instances.
 */
export interface ExtendedDebug extends InternalDebug {
  /**
   * Create and return a new {@link ExtendedDebugger} instance.
   */
  (...args: Parameters<InternalDebug>): ExtendedDebugger;
}

/**
 * A {@link InternalDebugger} interface extended with convenience methods.
 */
export interface ExtendedDebugger extends _InternalDebuggerNoExtends, DebuggerExtension {
  /**
   * Send an optionally-formatted message to output.
   */
  (...args: Parameters<InternalDebugger>): ReturnType<InternalDebugger>;
  /**
   * Creates a new instance by appending `namespace` to the current instance's
   * namespace. The new instance will also inherit the current instance's `log`
   * function, if one exists.
   */
  extend: (...args: Parameters<InternalDebugger['extend']>) => ExtendedDebugger;
  /**
   * Send a blank newline to output.
   */
  newline: () => void;
}

/**
 * The shape of the new keys that are added to the {@link InternalDebugger}
 * object. {@link InternalDebugger} + {@link DebuggerExtension} =
 * {@link ExtendedDebugger}.
 *
 * @internal
 */
export type DebuggerExtension<T = UnextendableInternalDebugger> =
  DebuggerSubInstanceTypeGuard<_DebuggerSubInstances<T>>;

/**
 * Exposes "secret" {@link $instances} access.
 *
 * @see {@link DebuggerSubInstanceTypeGuard}
 */
export type With$instances<Wrapped> = Wrapped & {
  /**
   * An array of sub-instances (e.g. "error", "warn", etc), including the root
   * instance.
   */
  [$instances]: DebuggerSubInstanceTypeGuard<
    Merge<
      _DebuggerSubInstances,
      {
        /**
         * A cyclical reference to the current logger.
         */
        $log: Wrapped;
      }
    >
  >;
};

/**
 * @see {@link extendedDebuggerSubInstanceProperties}
 */
export type ExtendedDebuggerSubInstanceProperties =
  (typeof extendedDebuggerSubInstanceProperties)[number];

/**
 * The single source of truth for the keys and types of the various convenience
 * sub-instances (e.g. "error", "warn", etc). **If your goal is to iterate over
 * the sub-instances of an {@link ExtendedDebugger} outside of this file, use
 * {@link $instances} instead.**
 *
 * This array of property strings is guaranteed to be accurate thanks to
 * internal use of the `DebuggerSubInstanceTypeGuard` type (not publicly
 * exported).
 */
const extendedDebuggerSubInstanceProperties = [
  'message',
  'error',
  'warn'
] as const satisfies (keyof _DebuggerSubInstances)[];

// ? We use this seemingly redundant data structure here because we want
// ? comments for the sub-instance properties. We type check that
// ? extendedDebuggerSubInstanceProperties matches _DebuggerSubInstances
// ? with a combination of satisfies (above) and assigning unknown sub-instance
// ? names to "never"
type _DebuggerSubInstances<T = UnextendableInternalDebugger> = {
  /**
   * A sub-instance for outputting messages to the attention of the reader.
   */
  message: T;
  /**
   * A sub-instance for outputting error messages.
   */
  error: T;
  /**
   * A sub-instance for outputting warning messages.
   */
  warn: T;
};

// ? An internal type ensuring all debugger sub-instances are defined and none
// ? are missing due to developer mistake. If such an mistake were to occur, the
// ? resulting return type of the dubious properties becomes "never," which
// ? should alert the developer (future me!) that this mistake occurred
type DebuggerSubInstanceTypeGuard<RealType extends object> = RealType &
  Merge<
    Record<keyof _DebuggerSubInstances, never>,
    Record<(typeof extendedDebuggerSubInstanceProperties)[number], unknown>
  >;

/**
 * An `ExtendedDebug` instance that returns an {@link ExtendedDebugger} instance
 * via {@link extendDebugger}.
 */
export const debugFactory = new Proxy(
  internalDebuggerFactory as unknown as ExtendedDebug,
  {
    apply(_target, _this: unknown, args: Parameters<InternalDebug>) {
      return extendDebugger(internalDebuggerFactory(...args));
    },
    get(target, property: PropertyKey, proxy: ExtendedDebug) {
      const value: unknown = target[property as keyof typeof target];
      const isSymbolOrOwnProperty =
        typeof property === 'string' &&
        (isSymbolObject(property) ||
          Object.hasOwn(internalDebuggerFactory, property) ||
          Object.hasOwn(Object.getPrototypeOf(internalDebuggerFactory), property));

      if (isSymbolOrOwnProperty && typeof value === 'function') {
        return function (...args: unknown[]) {
          // ? This is "this-recovering" code.
          const returnValue = value.apply(target, args);
          // ? Whenever we'd return an InternalDebugger instance, return the proxy
          // ? instead.
          /* istanbul ignore next */
          return isPromise(returnValue)
            ? returnValue.then((realReturnValue) => maybeReturnProxy(realReturnValue))
            : maybeReturnProxy(returnValue);
        };
      }

      return value;

      /* istanbul ignore next */
      function maybeReturnProxy(returnValue: unknown) {
        return returnValue === target ? proxy : returnValue;
      }
    }
  }
);

/**
 * Extends a {@link InternalDebugger} instance with several convenience methods,
 * returning an {@link ExtendedDebugger} instance.
 */
export function extendDebugger(instance: InternalDebugger): ExtendedDebugger {
  const extend = instance.extend.bind(instance);

  // ? Work around upstream debug package descriptor "configurable" set to false
  const finalInstance = new Proxy(
    instance as unknown as With$instances<ExtendedDebugger>,
    {
      set(target, property_, updatedValue) {
        const property = property_ as keyof typeof target;

        if (property === 'enabled') {
          const isEnabled = !!updatedValue;

          target[property] = isEnabled;

          for (const subInstanceProperty of extendedDebuggerSubInstanceProperties) {
            target[subInstanceProperty].enabled = isEnabled;
          }
        } else {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (target[property] as any) = updatedValue;
        }

        return true;
      }
    }
  );

  finalInstance[$instances] = Object.create(null);
  finalInstance[$instances].$log = finalInstance;
  finalInstance[$instances].error = finalizeDebugger(extend('<error>'));
  finalInstance[$instances].message = finalizeDebugger(extend('<message>'));
  finalInstance[$instances].warn = finalizeDebugger(extend('<warn>'));

  Object.defineProperties(finalInstance, {
    error: {
      configurable: true,
      enumerable: true,
      get: () => finalInstance[$instances].error
    },
    message: {
      configurable: true,
      enumerable: true,
      get: () => finalInstance[$instances].message
    },
    warn: {
      configurable: true,
      enumerable: true,
      get: () => finalInstance[$instances].warn
    }
  });

  finalInstance.extend = (...args) => extendDebugger(extend(...args));

  finalInstance.newline = () => {
    if (finalInstance.enabled) {
      if (finalInstance.log) {
        finalInstance.log('');
      } else {
        debugFactory.log('');
      }
    }
  };

  return finalInstance as ExtendedDebugger;
}

/**
 * Replace the `extend` method of an {@link InternalDebugger} instance with a
 * function that always throws.
 */
export function finalizeDebugger(
  instance: InternalDebugger
): UnextendableInternalDebugger {
  const unextendable = instance as UnextendableInternalDebugger;

  unextendable.extend = () => {
    throw new Error('instance is not extendable');
  };

  return unextendable;
}
