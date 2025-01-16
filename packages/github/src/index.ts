import { createGenericLogger } from 'rejoinder';

import {
  LoggerType,
  withMetadataTracking,
  withoutMetadataTracking,
  type ExtendedLogger
} from 'rejoinder/internal';

/**
 * Create and return new set of logger instances.
 *
 * The pre-extended sub-instances of the returned logger support "titles," which
 * correspond to GitHub Actions output titles. Set them by providing input of
 * the form `"title=...::"`, e.g.:
 *
 * ```
 * logger.warn("title=Output For Project X::Real output here!");
 * ```
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
  const logger = withPatchedExtend(
    withoutMetadataTracking(LoggerType.GenericOutput, createGenericLogger({ namespace }))
  );

  return withMetadataTracking(LoggerType.GenericOutput, logger);
}

/**
 * Recursively patches {@link ExtendedLogger.extend} so that all debugger
 * instances function properly and are tracked.
 */
function withPatchedExtend(instance: ExtendedLogger) {
  const oldExtend = instance.extend;
  const { namespace } = instance;

  instance.log = githubLog('log', namespace);
  instance.message.log = githubLog('notice', namespace);
  instance.warn.log = githubLog('warning', namespace);
  instance.error.log = githubLog('error', namespace);

  instance.extend = (...args: Parameters<ExtendedLogger['extend']>) => {
    const logger = withoutMetadataTracking(LoggerType.GenericOutput, oldExtend(...args));
    return withMetadataTracking(LoggerType.GenericOutput, withPatchedExtend(logger));
  };

  return instance;
}

function githubLog(kind: 'notice' | 'warning' | 'error' | 'log', rawNamespace: string) {
  return (...args: unknown[]) => {
    const consoleLogArgs = [];

    if (kind === 'log') {
      const namespaceMaybeWithColon = rawNamespace;
      const endsWithColon = namespaceMaybeWithColon.endsWith(':');

      const rawContent = String(args[0])
        .trim()
        .split(rawNamespace)
        .slice(1)
        .join(rawNamespace)
        .trim();

      const content =
        namespaceMaybeWithColon + `${endsWithColon ? '' : ':'} ` + rawContent;

      consoleLogArgs.push(content, ...args.slice(1));
    } else {
      const kindString = `:<${
        kind === 'notice' ? 'message' : kind === 'warning' ? 'warn' : 'error'
      }>`;

      const maybeWithTitle = String(args[0])
        .trim()
        .split(kindString)
        .slice(1)
        .join(kindString)
        .trim();

      const namespaceMaybeWithColon = rawNamespace.replace(kindString, '');
      const endsWithColon = namespaceMaybeWithColon.endsWith(':');
      const startsWithTitle = maybeWithTitle.startsWith('title=');
      const hasDoubleColon = maybeWithTitle.includes('::');

      const rawContent = startsWithTitle
        ? hasDoubleColon
          ? maybeWithTitle.split('::')[1]
          : ''
        : maybeWithTitle;

      const content =
        namespaceMaybeWithColon + `${endsWithColon ? '' : ':'} ` + rawContent;

      const title = startsWithTitle ? maybeWithTitle.split('::')[0] : '';

      consoleLogArgs.push(
        `::${kind}${startsWithTitle ? ` ${title}` : ''}::${content}`,
        ...args.slice(1)
      );
    }

    // eslint-disable-next-line no-console
    console.log(...consoleLogArgs);
  };
}
