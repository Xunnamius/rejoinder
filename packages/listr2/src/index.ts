/* eslint-disable @typescript-eslint/no-explicit-any */

import { debugFactory } from '@-xun/debug';
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

import {
  LoggerType,
  makeExtendedLogger,
  metadata,
  withMetadataTracking
} from 'rejoinder/internal';

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
  return withMetadataTracking(
    LoggerType.GenericOutput,
    makeExtendedLogger(
      debugFactory(namespace),
      LoggerType.GenericOutput,
      function (...args: unknown[]) {
        task.output = args.join(' ').trim();
      }
    )
  );
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
