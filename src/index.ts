// TODO: add chalk abilities (and also delete the comment on the next line)
// {@symbiote/notExtraneous chalk}

// TODO: also, getLoggerByType should be able to return enabled / disabled only

import nodeConsole from 'node:console';

import {
  get$instancesKeys,
  LoggerType,
  makeExtendedLogger,
  metadata,
  withMetadataTracking,
  withPatchedExtend
} from 'universe:internal.ts';

import { $instances, debugFactory } from '@-xun/debug';

const consoleLog = (...args: unknown[]) => {
  nodeConsole.log(...args);
};

const consoleError = (...args: unknown[]) => {
  nodeConsole.error(...args);
};

export { LoggerType };

/**
 * A string representing a single space (one space-ish character). Note that
 * space-ish characters will not be `trim()`'d.
 */
// ! SINGLE_SPACE is a UNICODE CHARACTER and not a normal space character!
export const SINGLE_SPACE = '⠀';

/**
 * A string of spaces representing a short CLI "tab" (two space-ish characters).
 * Note that space-ish characters will not be `trim()`'d.
 */
export const SHORT_TAB = SINGLE_SPACE.repeat(2);

/**
 * A string of spaces representing a CLI "tab" (four space-ish characters). Note
 * that space-ish characters will not be `trim()`'d.
 */
export const TAB = SINGLE_SPACE.repeat(4);

/**
 * Create and return new set of logger instances.
 */
export function createGenericLogger({
  namespace
}: {
  /**
   * The namespace of the logger. The namespace must be a valid [`debug`
   * namespace](https://npm.im/debug#namespace-colors).
   *
   * @see https://npm.im/debug#namespace-colors
   */
  namespace: string;
}) {
  return withMetadataTracking(
    LoggerType.GenericOutput,
    makeExtendedLogger(
      debugFactory(namespace),
      LoggerType.GenericOutput,
      consoleLog,
      consoleError
    )
  );
}

/**
 * Create a new debug logger instance.
 */
export function createDebugLogger({
  namespace
}: {
  /**
   * The namespace of the logger. The namespace must be a valid [`debug`
   * namespace](https://npm.im/debug#namespace-colors).
   *
   * @see https://npm.im/debug#namespace-colors
   */
  namespace: string;
}) {
  const debug = withPatchedExtend(debugFactory(namespace));

  for (const instanceProperty of get$instancesKeys(debug)) {
    debug[$instances][instanceProperty].log = consoleError;
  }

  return withMetadataTracking(LoggerType.DebugOnly, debug);
}

/**
 * Return an array of all known loggers of a specific type: either `stdout`,
 * `debug`, or both (`all`). Pre-extended loggers (e.g. `::message`,
 * `::warn`, and `::error`) are excluded unless `includeInternal` is `true`.
 */
export function getLoggersByType({
  type,
  includeInternal = true
}: {
  /**
   * The type of loggers to return. Valid values are one of:
   *
   * - `stdout` returns loggers created via `createGenericLogger`
   *
   * - `debug` returns loggers created via `createDebugLogger`
   *
   * - `all` returns all loggers
   */
  type: LoggerType;
  /**
   * Whether to include unextendable/internal/pre-extended loggers like
   * `::message` and `::warn` in output.
   *
   * @default true
   */
  includeInternal?: boolean;
}) {
  const instances = [];

  if (type === LoggerType.All || type === LoggerType.GenericOutput) {
    instances.push(...metadata.logger);
  }

  if (type === LoggerType.All || type === LoggerType.DebugOnly) {
    instances.push(...metadata.debugger);
  }

  return includeInternal
    ? instances
    : instances.filter((instance) => 'newline' in instance);
}

/**
 * Disable all logger instances (coarse-grain).
 */
export function disableLoggers({
  type,
  filter
}: {
  /**
   * The type of logging to disable. Valid values are one of:
   *
   * - `stdout` disables loggers created via `createGenericLogger`
   *
   * - `debug` disables loggers created via `createDebugLogger`
   *
   * - `all` disables all loggers
   */
  type: LoggerType;

  /**
   * Optionally filter the loggers to be disabled. If `filter` is a string, only
   * loggers with namespaces equal to `filter` will be disabled. If `filter` is
   * a regular expression, only loggers with namespaces matching the expression
   * will be disabled.
   */
  filter?: string | RegExp;
}) {
  for (const instance of getLoggersByType({ type })) {
    if (
      !filter ||
      (typeof filter === 'string' && instance.namespace === filter) ||
      !!instance.namespace.match(filter)
    ) {
      instance.enabled = false;
    }
  }
}

/**
 * Enable all logger instances (coarse-grain).
 */
export function enableLoggers({
  type,
  filter
}: {
  /**
   * The type of logging to enable. Valid values are one of:
   *
   * - `stdout` enables loggers created via `createGenericLogger`
   *
   * - `debug` enables loggers created via `createDebugLogger`
   *
   * - `all` enables all loggers
   */
  type: LoggerType;

  /**
   * Optionally filter the loggers to be enabled. If `filter` is a string, only
   * loggers with namespaces equal to `filter` will be enabled. If `filter` is a
   * regular expression, only loggers with namespaces matching the expression
   * will be enabled.
   */
  filter?: string | RegExp;
}) {
  for (const instance of getLoggersByType({ type })) {
    if (
      !filter ||
      (typeof filter === 'string' && instance.namespace === filter) ||
      !!instance.namespace.match(filter)
    ) {
      instance.enabled = true;
    }
  }
}

/**
 * Prevents logs with the specified tags from being sent to output.
 */
export function disableLoggingByTag({
  tags
}: {
  /**
   * The tags of messages that will no longer be sent to output. If `tags` is
   * empty`, calling this function is effectively a noop.
   */
  tags: string[];
}) {
  tags.forEach((tag) => metadata.denylist.add(tag));
}

/**
 * Allows logs with the specified tags to resume being sent to output. Only relevant as the inverse function of {@link disableLoggingByTag}.
 */
export function enableLoggingByTag({
  tags
}: {
  /**
   * The tags of messages that will resume being sent to output. If `tags` is
   * empty`, calling this function is effectively a noop.
   */
  tags: string[];
}) {
  tags.forEach((tag) => metadata.denylist.delete(tag));
}

/**
 * Returns an array of the tags disabled via {@link disableLoggingByTag}.
 */
export function getDisabledTags() {
  return Array.from(new Set(metadata.denylist));
}

export type { ExtendedLogger } from 'universe:internal.ts';
export type { ExtendedDebugger } from '@-xun/debug';
