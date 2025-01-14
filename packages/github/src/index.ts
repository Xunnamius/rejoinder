import assert from 'node:assert';

import { createGenericLogger } from 'rejoinder';

import {
  LoggerType,
  withMetadataTracking,
  type ExtendedLogger
} from 'rejoinder/internal';

/**
 * Create and return new set of logger instances.
 */
export function createGithubLogger({
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
  const logger = createGenericLogger({ namespace });
  const { log } = logger;

  assert(log);

  logger.message.log = githubLog('notice', log);
  logger.warn.log = githubLog('warning', log);
  logger.error.log = githubLog('error', log);

  return withMetadataTracking(LoggerType.GenericOutput, logger);
}

function githubLog(
  kind: 'notice' | 'warning' | 'error',
  log: NonNullable<ExtendedLogger['log']>
) {
  return (...args: unknown[]) => {
    const arg0 = args[0];
    const arg1 = args.length > 1 ? String(args[1]) : '';

    const title =
      typeof arg0 === 'string' && arg0.startsWith('title=') ? arg0.slice(6) : undefined;

    log(`::${kind}${title ? ` title=${title}` : ''}::${arg1}`, ...args.slice(1));
  };
}
