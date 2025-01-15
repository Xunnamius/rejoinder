/* eslint-disable @typescript-eslint/no-explicit-any */

import util from 'node:util';

import { Manager } from '@listr2/manager';

import {
  ListrLogger,
  PRESET_TIMER,
  PRESET_TIMESTAMP,
  ProcessOutput,
  type ListrBaseClassOptions,
  type ListrContext,
  type ListrRenderer,
  type ListrTaskWrapper
} from 'listr2';

import { createGenericLogger } from 'rejoinder';

import {
  $instances,
  get$instancesKeys,
  LoggerType,
  metadata,
  withMetadataTracking,
  withoutMetadataTracking,
  type ExtendedLogger
} from 'rejoinder/internal';

export { ListrErrorTypes } from 'listr2';

/**
 * A pre-customized Listr {@link Manager} instance.
 */
export type ListrManager<T = any> = Manager<T, 'default' | 'verbose'>;

/**
 * Represents a generic Listr2 Task object.
 *
 * @internal
 */
export type GenericListrTask = ListrTaskWrapper<
  ListrContext,
  typeof ListrRenderer,
  typeof ListrRenderer
>;

/**
 * Create and return a new set of logger instances configured to output via a
 * Listr2 task.
 *
 * Note that the `::newline` method of listr2 logger instances is a no-op.
 */
export function createListrTaskLogger({
  namespace,
  task
}: {
  /**
   * The namespace of the logger. The namespace must be a valid [`debug`
   * namespace](https://npm.im/debug#namespace-colors).
   *
   * @see https://npm.im/debug#namespace-colors
   */
  namespace: string;
  /**
   * The task to which logging output will be sent.
   */
  task: GenericListrTask;
}) {
  const logger = withPatchedExtend(
    withoutMetadataTracking(
      LoggerType.GenericOutput,
      createGenericLogger({ namespace })
    ),
    task
  );

  return withMetadataTracking(LoggerType.GenericOutput, logger);
}

/**
 * Recursively patches {@link ExtendedLogger.extend} so that all debugger
 * instances function properly and are tracked.
 */
function withPatchedExtend(instance: ExtendedLogger, task: GenericListrTask) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const oldExtend = instance.extend;
  const taskLog = (...args: unknown[]) => {
    // ? When template strings aren't used, debug will pass the args on to us to
    // ? pass onto our logger. Since we're not using console.log, we need to
    // ? emulate some of console.log's features (specifically via util.inspect)
    task.output = args
      .map((arg) =>
        typeof arg === 'string'
          ? arg
          : util.inspect(arg, {
              colors:
                ['true', '1', 'yes'].includes(process.env.DEBUG_COLORS!) ||
                (!['false', '0', 'no'].includes(process.env.DEBUG_COLORS!) &&
                  process.stdout.isTTY),
              depth: Number.parseInt(process.env.DEBUG_DEPTH || '2') || 0
            })
      )
      .join(' ')
      .trim();
  };

  for (const instanceProperty of get$instancesKeys(instance)) {
    instance[$instances][instanceProperty].log = taskLog;
  }

  instance.extend = (...args: Parameters<ExtendedLogger['extend']>) => {
    const logger = withoutMetadataTracking(LoggerType.GenericOutput, oldExtend(...args));

    return withMetadataTracking(
      LoggerType.GenericOutput,
      withPatchedExtend(logger, task)
    );
  };

  instance.newline = () => undefined;

  return instance;
}

/**
 * Create and return a new Listr2 {@link Manager} instance pre-configured to
 * work in harmony with rejoinder.
 *
 * Specifically, this instance:
 *
 *   - Has good consistent defaults.
 *
 *   - Switches to the verbose renderer when the DEBUG environment variable is
 *     present or any of the debug logger namespaces are enabled.
 */
export function createListrManager<T = any>(options?: {
  /**
   * Properties provided here will override the defaults passed to the
   * {@link Manager} constructor.
   */
  overrides?: ListrBaseClassOptions;
}) {
  const processOutput = new ProcessOutput();
  // ? Since we use the fallback logger whenever we're in debug mode, let's
  // ? allow debug traffic to hit stderr live.
  processOutput.hijack = processOutput.release = () => undefined /* noop */;

  const manager = new Manager<T, 'default', 'verbose' | 'simple'>({
    concurrent: false,
    collectErrors: 'minimal',
    exitOnError: true,
    registerSignalListeners: true,
    renderer: 'default',
    fallbackRenderer: 'verbose',
    fallbackRendererCondition: () =>
      !!process.env.DEBUG || metadata.debugger.some((logger) => logger.enabled),
    rendererOptions: {
      collapseSubtasks: false,
      collapseSkips: false,
      timer: PRESET_TIMER
    },
    fallbackRendererOptions: {
      timestamp: PRESET_TIMESTAMP,
      timer: PRESET_TIMER,
      logger: new ListrLogger({ processOutput })
    },
    ...options?.overrides
  });

  return manager;
}
