import {
  createDebugLogger,
  disableLoggers,
  disableLoggingByTag,
  enableLoggers,
  enableLoggingByTag,
  getLoggersByType
} from 'rejoinder';

import { LoggerType, resetInternalState } from 'rejoinder/internal';

import { createGithubLogger } from 'universe+github';

import {
  extractAllLoggers,
  isolatedImport,
  withMockedEnv,
  withMockedOutput
} from 'testverse:util.ts';

import type { ExtendedLogger } from 'rejoinder/internal';

jest.mock<typeof import('rejoinder')>('rejoinder', () => {
  return jest.requireActual('rejoinder');
});

const namespace = 'namespace';
const globalDummyFilter = new RegExp('g');

beforeEach(() => {
  resetInternalState();
});

describe('<activator>', () => {
  it('enables loggers when github actions debugging is enabled', async () => {
    expect.hasAssertions();

    {
      const debug = createDebugLogger({ namespace });

      expect(debug.enabled).toBeFalsy();

      isolatedImport<typeof import('universe+github:activator.ts')>(
        'universe+github:activator.ts'
      );

      expect(debug.enabled).toBeFalsy();

      await withMockedEnv(
        () => {
          isolatedImport<typeof import('universe+github:activator.ts')>(
            'universe+github:activator.ts'
          );

          expect(debug.enabled).toBeTrue();
        },
        { ACTIONS_RUNNER_DEBUG: 'true' }
      );
    }

    {
      const debug = createDebugLogger({ namespace });

      isolatedImport<typeof import('universe+github:activator.ts')>(
        'universe+github:activator.ts'
      );

      expect(debug.enabled).toBeFalsy();

      await withMockedEnv(
        () => {
          isolatedImport<typeof import('universe+github:activator.ts')>(
            'universe+github:activator.ts'
          );

          expect(debug.enabled).toBeTrue();
        },
        { ACTIONS_STEP_DEBUG: 'true' }
      );
    }
  });
});

describe('::createGithubLogger', () => {
  it('returns ExtendedLogger instance', async () => {
    expect.hasAssertions();

    await withMockedOutput(({ nodeLogSpy }) => {
      const log = createGithubLogger({ namespace });

      expect(log.enabled).toBeTrue();
      expect(log.log).toBeDefined();

      log('logged');

      expect(nodeLogSpy.mock.calls).toStrictEqual([
        [expect.stringMatching(/namespace: logged/)]
      ]);
    });
  });

  it('returns instance capable of handling complex input', async () => {
    expect.hasAssertions();

    await withMockedOutput(({ nodeLogSpy }) => {
      const log = createGithubLogger({ namespace });

      expect(log.enabled).toBeTrue();
      expect(log.log).toBeDefined();

      log('logged: %O', { success: true });

      expect(nodeLogSpy.mock.calls).toStrictEqual([
        [expect.stringMatching(/namespace: logged:.+{.+success:.+true.+}/)]
      ]);
    });
  });

  it('returns extensions that can themselves be extended', async () => {
    expect.hasAssertions();

    await withMockedOutput(({ nodeLogSpy }) => {
      const log = createGithubLogger({ namespace });
      const extension1 = log.extend('extension');
      const extension2 = extension1.extend(namespace);

      expect(log.enabled).toBeTrue();
      expect(extension1.enabled).toBeTrue();
      expect(extension2.enabled).toBeTrue();

      expect(log.log).toBeDefined();
      expect(extension1.log).toBeDefined();
      expect(extension2.log).toBeDefined();

      log('logged');
      extension1('logged');
      extension2('logged');

      expect(nodeLogSpy.mock.calls).toStrictEqual([
        [expect.stringMatching(/namespace: logged/)],
        [expect.stringMatching(/namespace::extension: logged/)],
        [expect.stringMatching(/namespace::extension:namespace: logged/)]
      ]);
    });
  });

  it('can hint at output stream when calling newline (defaults to stdout)', async () => {
    expect.hasAssertions();

    await withMockedOutput(({ nodeLogSpy }) => {
      const log = createGithubLogger({ namespace });
      const extension = log.extend(namespace);

      log.newline();
      log.newline('default');

      expect(nodeLogSpy.mock.calls).toStrictEqual([[''], ['']]);

      log.newline('alternate');

      expect(nodeLogSpy.mock.calls).toStrictEqual([[''], [''], ['']]);

      extension.newline();
      extension.newline('default');

      expect(nodeLogSpy.mock.calls).toStrictEqual([[''], [''], [''], [''], ['']]);

      extension.newline('alternate');

      expect(nodeLogSpy.mock.calls).toStrictEqual([[''], [''], [''], [''], [''], ['']]);
    });
  });

  it('is unaffected by the presence of tags by default', async () => {
    expect.hasAssertions();

    await withMockedOutput(({ nodeLogSpy }) => {
      const log = createGithubLogger({ namespace });
      const extension = log.extend('extension');

      log(['tag-1', 'tag-2'], 'logged: %O', { success: true });
      log.error(['tag-1', 'tag-2'], 'logged: %O', { success: true });
      log.message(['tag-1', 'tag-2'], 'logged: %O', { success: true });
      log.warn(['tag-1', 'tag-2'], 'logged: %O', { success: true });

      log.newline(['tag-1', 'tag-2']);
      log.newline(['tag-1', 'tag-2'], 'default');
      log.newline(['tag-1', 'tag-2'], 'alternate');

      extension(['tag-3', 'tag-4'], 'logged');
      extension.error(['tag-3', 'tag-4'], 'logged');
      extension.message(['tag-3', 'tag-4'], 'logged');
      extension.warn(['tag-3', 'tag-4'], 'logged');

      extension.newline(['tag-3', 'tag-4']);
      extension.newline(['tag-3', 'tag-4'], 'default');
      extension.newline(['tag-3', 'tag-4'], 'alternate');

      expect(nodeLogSpy.mock.calls).toStrictEqual([
        [expect.stringMatching(/namespace: logged:.+{.+success:.+true.+}/)],
        [expect.stringMatching(/^::error::namespace: logged:.+{.+success:.+true.+}/)],
        [expect.stringMatching(/^::notice::namespace: logged:.+{.+success:.+true.+}/)],
        [expect.stringMatching(/^::warning::namespace: logged:.+{.+success:.+true.+}/)],
        [''],
        [''],
        [''],
        [expect.stringMatching(/namespace::extension: logged/)],
        [expect.stringMatching(/^::error::namespace::extension: logged/)],
        [expect.stringMatching(/^::notice::namespace::extension: logged/)],
        [expect.stringMatching(/^::warning::namespace::extension: logged/)],
        [''],
        [''],
        ['']
      ]);
    });
  });

  it('propagates ::enabled mutations to sub-instances', async () => {
    expect.hasAssertions();

    await withMockedOutput(({ nodeLogSpy }) => {
      const log = createGithubLogger({ namespace });
      const extension = log.extend('extension');

      log('logged: %O', { success: true });
      log.error('logged: %O', { success: true });
      log.message('logged: %O', { success: true });
      log.warn('logged: %O', { success: true });

      log.newline();
      log.newline('default');
      log.newline('alternate');

      extension('logged');
      extension.error('logged');
      extension.message('logged');
      extension.warn('logged');

      extension.newline();
      extension.newline('default');
      extension.newline(['tag-3', 'tag-4'], 'alternate');

      expect(nodeLogSpy.mock.calls).toStrictEqual([
        [expect.stringMatching(/namespace: logged:.+{.+success:.+true.+}/)],
        [expect.stringMatching(/^::error::namespace: logged:.+{.+success:.+true.+}/)],
        [expect.stringMatching(/^::notice::namespace: logged:.+{.+success:.+true.+}/)],
        [expect.stringMatching(/^::warning::namespace: logged:.+{.+success:.+true.+}/)],
        [''],
        [''],
        [''],
        [expect.stringMatching(/namespace::extension: logged/)],
        [expect.stringMatching(/^::error::namespace::extension: logged/)],
        [expect.stringMatching(/^::notice::namespace::extension: logged/)],
        [expect.stringMatching(/^::warning::namespace::extension: logged/)],
        [''],
        [''],
        ['']
      ]);
    });
  });

  it('allows setting title using first string argument', async () => {
    expect.hasAssertions();

    await withMockedOutput(({ nodeLogSpy }) => {
      const log = createGithubLogger({ namespace });
      log.warn('title=Title Is Here::logged: %O', { success: true });
      log.warn('not a title=Title Is Here::logged: %O', { success: true });
      log.message('title=Title By Itself', { success: true });

      expect(nodeLogSpy.mock.calls).toStrictEqual([
        [
          expect.stringMatching(
            /^::warning title=Title Is Here::namespace: logged:.+{.+success:.+true.+}/
          )
        ],
        [
          expect.stringMatching(
            /^::warning::namespace: not a title=Title Is Here::logged:.+{.+success:.+true.+}/
          )
        ],
        ['::notice title=Title By Itself::namespace: ', { success: true }]
      ]);
    });
  });

  it('outputs correctly given multiple arguments', async () => {
    expect.hasAssertions();

    await withMockedOutput(({ nodeLogSpy }) => {
      const log = createGithubLogger({ namespace });
      log('1', 2, { three: true }, 'four ::five:: six');
      log.message('1', 2, { three: true }, 'four ::five:: six');

      expect(nodeLogSpy.mock.calls).toStrictEqual([
        [
          expect.stringMatching(/^namespace: 1/),
          2,
          { three: true },
          'four ::five:: six'
        ],
        [
          expect.stringMatching(/^::notice::namespace: 1/),
          2,
          { three: true },
          'four ::five:: six'
        ]
      ]);
    });
  });

  it('works when first argument is not a string', async () => {
    expect.hasAssertions();

    await withMockedOutput(({ nodeLogSpy }) => {
      const log = createGithubLogger({ namespace });
      log({ success: true });
      log.warn({ success: true });

      expect(nodeLogSpy.mock.calls).toStrictEqual([
        [expect.stringMatching(/^namespace: {.+success:.+true.+}/)],
        [expect.stringMatching(/^::warning::namespace: {.+success:.+true.+}/)]
      ]);
    });
  });
});

describe('::disableLoggers', () => {
  const loggers: {
    log: ExtendedLogger;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = {} as any;

  beforeEach(() => {
    loggers.log = createGithubLogger({ namespace: LoggerType.GenericOutput });
    loggers.log.log = jest.fn();
  });

  it('disables all possible loggers if no filter specified', async () => {
    expect.hasAssertions();

    expect(loggers.log.enabled).toBeTrue();

    disableLoggers({ type: LoggerType.All });

    expect(loggers.log.enabled).toBeFalse();
  });

  it('leaves disabled loggers disabled', async () => {
    expect.hasAssertions();

    expect(loggers.log.enabled).toBeTrue();

    disableLoggers({ type: LoggerType.All });

    expect(loggers.log.enabled).toBeFalse();

    disableLoggers({ type: LoggerType.All });

    expect(loggers.log.enabled).toBeFalse();
  });

  it('disables loggers by namespace string exact match', async () => {
    expect.hasAssertions();

    expect(loggers.log.enabled).toBeTrue();

    disableLoggers({ type: LoggerType.All, filter: LoggerType.GenericOutput });

    expect(loggers.log.enabled).toBeFalse();

    disableLoggers({ type: LoggerType.All, filter: 'listr' });

    expect(loggers.log.enabled).toBeFalse();

    expect(loggers.log.enabled).toBeFalse();
  });

  it('disables loggers by namespace regex match', async () => {
    expect.hasAssertions();

    expect(loggers.log.enabled).toBeTrue();

    disableLoggers({ type: LoggerType.All, filter: globalDummyFilter });

    expect(loggers.log.enabled).toBeFalse();
  });

  it('does not reuse stateful RegExp instances', async () => {
    expect.hasAssertions();

    loggers.log.enabled = true;

    const parameters = { type: LoggerType.All, filter: globalDummyFilter } as const;

    disableLoggers(parameters);

    expect(loggers.log.enabled).toBeFalse();

    loggers.log.enabled = true;

    disableLoggers(parameters);

    expect(loggers.log.enabled).toBeFalse();
  });

  it('disables loggers by type match', async () => {
    expect.hasAssertions();

    expect(loggers.log.enabled).toBeTrue();

    disableLoggers({ type: LoggerType.GenericOutput });

    expect(loggers.log.enabled).toBeFalse();

    loggers.log.enabled = true;

    expect(loggers.log.enabled).toBeTrue();
  });

  it('does not disable loggers with unsound combinations of matchers', async () => {
    expect.hasAssertions();

    expect(loggers.log.enabled).toBeTrue();

    disableLoggers({ type: LoggerType.All, filter: 'no-match' });

    expect(loggers.log.enabled).toBeTrue();

    disableLoggers({
      type: LoggerType.DebugOnly,
      filter: new RegExp(`${LoggerType.GenericOutput}|listr`)
    });

    expect(loggers.log.enabled).toBeTrue();

    disableLoggers({
      type: LoggerType.GenericOutput,
      filter: new RegExp(LoggerType.DebugOnly)
    });

    expect(loggers.log.enabled).toBeTrue();
  });
});

describe('::enableLoggers', () => {
  const loggers: {
    log: ExtendedLogger;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = {} as any;

  beforeEach(() => {
    loggers.log = createGithubLogger({ namespace: LoggerType.GenericOutput });
    loggers.log.log = jest.fn();
  });

  it('enables all possible loggers if no filter specified', async () => {
    expect.hasAssertions();

    expect(loggers.log.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All });

    expect(loggers.log.enabled).toBeTrue();
  });

  it('leaves enabled loggers enabled', async () => {
    expect.hasAssertions();

    expect(loggers.log.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All });

    expect(loggers.log.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All });

    expect(loggers.log.enabled).toBeTrue();
  });

  it('enables loggers by namespace string exact match', async () => {
    expect.hasAssertions();

    expect(loggers.log.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All, filter: LoggerType.GenericOutput });

    expect(loggers.log.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All, filter: 'listr' });

    expect(loggers.log.enabled).toBeTrue();

    expect(loggers.log.enabled).toBeTrue();

    loggers.log.enabled = false;

    expect(loggers.log.enabled).toBeFalse();

    enableLoggers({ type: LoggerType.All, filter: LoggerType.GenericOutput });

    expect(loggers.log.enabled).toBeTrue();
  });

  it('enables loggers by namespace regex match', async () => {
    expect.hasAssertions();

    expect(loggers.log.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All, filter: globalDummyFilter });

    expect(loggers.log.enabled).toBeTrue();
  });

  it('does not reuse stateful RegExp instances', async () => {
    expect.hasAssertions();

    loggers.log.enabled = false;

    const parameters = { type: LoggerType.All, filter: globalDummyFilter } as const;

    enableLoggers(parameters);

    expect(loggers.log.enabled).toBeTrue();

    loggers.log.enabled = false;

    enableLoggers(parameters);

    expect(loggers.log.enabled).toBeTrue();
  });

  it('enables loggers by type match', async () => {
    expect.hasAssertions();

    loggers.log.enabled = false;

    expect(loggers.log.enabled).toBeFalse();

    enableLoggers({ type: LoggerType.GenericOutput });

    expect(loggers.log.enabled).toBeTrue();

    loggers.log.enabled = false;

    expect(loggers.log.enabled).toBeFalse();
  });

  it('does not enable loggers with unsound combinations of matchers', async () => {
    expect.hasAssertions();

    loggers.log.enabled = false;

    expect.hasAssertions();

    expect(loggers.log.enabled).toBeFalse();

    enableLoggers({ type: LoggerType.All, filter: 'no-match' });

    expect(loggers.log.enabled).toBeFalse();

    enableLoggers({
      type: LoggerType.DebugOnly,
      filter: new RegExp(`${LoggerType.GenericOutput}|listr`)
    });

    expect(loggers.log.enabled).toBeFalse();

    enableLoggers({
      type: LoggerType.GenericOutput,
      filter: new RegExp(LoggerType.DebugOnly)
    });

    expect(loggers.log.enabled).toBeFalse();
  });
});

describe('::disableLoggingByTag', () => {
  it('can disable logging across logger types including sub-loggers by tag', async () => {
    expect.hasAssertions();

    const generic = createGithubLogger({ namespace });
    const genericExtended = generic.extend(namespace);

    await withMockedOutput(({ nodeLogSpy }) => {
      generic(['tag-1'], 'message: %O', { success: true });
      genericExtended(['tag-1'], 'message: %O', { success: true });

      expect(nodeLogSpy.mock.calls).toStrictEqual([
        [expect.stringMatching(/namespace: message:.+{.+success:.+true.+}/)],
        [expect.stringMatching(/namespace: message:.+{.+success:.+true.+}/)]
      ]);
    });

    disableLoggingByTag({ tags: ['tag-2'] });

    await withMockedOutput(({ nodeLogSpy }) => {
      generic(['tag-1'], 'message: %O', { success: true });
      genericExtended(['tag-1'], 'message: %O', { success: true });

      expect(nodeLogSpy.mock.calls).toStrictEqual([
        [expect.stringMatching(/namespace: message:.+{.+success:.+true.+}/)],
        [expect.stringMatching(/namespace: message:.+{.+success:.+true.+}/)]
      ]);
    });

    disableLoggingByTag({ tags: ['tag-1', 'tag-2', 'tag-3'] });

    await withMockedOutput(({ nodeLogSpy }) => {
      generic(['tag-1'], 'message: %O', { success: true });
      genericExtended(['tag-1'], 'message: %O', { success: true });

      expect(nodeLogSpy.mock.calls).toBeEmpty();
    });
  });

  it('does not prevent tag-less log calls from executing successfully', async () => {
    expect.hasAssertions();

    const generic = createGithubLogger({ namespace });

    disableLoggingByTag({ tags: ['tag-1', 'tag-2', 'tag-3'] });

    await withMockedOutput(({ nodeLogSpy }) => {
      generic('message: %O', { success: true });

      expect(nodeLogSpy.mock.calls).toStrictEqual([
        [expect.stringMatching(/namespace: message:.+{.+success:.+true.+}/)]
      ]);
    });
  });
});

describe('::enableLoggingByTag', () => {
  it('can enable logging across logger types including sub-loggers by tag', async () => {
    expect.hasAssertions();

    const generic = createGithubLogger({ namespace });
    const genericExtended = generic.extend(namespace);

    disableLoggingByTag({ tags: ['tag-1', 'tag-2', 'tag-3'] });

    await withMockedOutput(({ nodeLogSpy }) => {
      generic(['tag-1'], 'message: %O', { success: true });
      genericExtended(['tag-1'], 'message: %O', { success: true });

      expect(nodeLogSpy.mock.calls).toBeEmpty();
    });

    enableLoggingByTag({ tags: ['tag-2'] });

    await withMockedOutput(({ nodeLogSpy }) => {
      generic(['tag-1'], 'message: %O', { success: true });
      genericExtended(['tag-1'], 'message: %O', { success: true });

      expect(nodeLogSpy.mock.calls).toBeEmpty();
    });

    enableLoggingByTag({ tags: ['tag-1', 'tag-2', 'tag-3'] });

    await withMockedOutput(({ nodeLogSpy }) => {
      generic(['tag-1'], 'message: %O', { success: true });
      genericExtended(['tag-1'], 'message: %O', { success: true });

      expect(nodeLogSpy.mock.calls).toStrictEqual([
        [expect.stringMatching(/namespace: message:.+{.+success:.+true.+}/)],
        [expect.stringMatching(/namespace: message:.+{.+success:.+true.+}/)]
      ]);
    });
  });

  it('does not prevent tag-less log calls from executing successfully', async () => {
    expect.hasAssertions();

    const generic = createGithubLogger({ namespace });

    enableLoggingByTag({ tags: ['tag-1', 'tag-2', 'tag-3'] });

    await withMockedOutput(({ nodeLogSpy }) => {
      generic('message: %O', { success: true });

      expect(nodeLogSpy.mock.calls).toStrictEqual([
        [expect.stringMatching(/namespace: message:.+{.+success:.+true.+}/)]
      ]);
    });
  });
});

describe('::getLoggersByType', () => {
  it('returns subset of loggers by type', async () => {
    expect.hasAssertions();

    const log1 = createGithubLogger({ namespace: LoggerType.GenericOutput });
    const log2 = createGithubLogger({ namespace: LoggerType.GenericOutput });
    const log11 = log1.extend('1');

    expect(getLoggersByType({ type: LoggerType.All })).toIncludeSameMembers([
      ...extractAllLoggers(log1),
      ...extractAllLoggers(log2),
      ...extractAllLoggers(log11)
    ]);

    expect(getLoggersByType({ type: LoggerType.GenericOutput })).toIncludeSameMembers([
      ...extractAllLoggers(log1),
      ...extractAllLoggers(log2),
      ...extractAllLoggers(log11)
    ]);
  });

  it('skips returning internal loggers when includeInternal is disabled', async () => {
    expect.hasAssertions();

    const log1 = createGithubLogger({ namespace: LoggerType.GenericOutput });
    const log2 = createGithubLogger({ namespace: LoggerType.GenericOutput });
    const log11 = log1.extend('1');

    expect(
      getLoggersByType({ type: LoggerType.All, includeInternal: false })
    ).toIncludeSameMembers([log1, log2, log11]);

    expect(
      getLoggersByType({ type: LoggerType.GenericOutput, includeInternal: false })
    ).toIncludeSameMembers([log1, log2, log11]);
  });

  it('tracks extended loggers', async () => {
    expect.hasAssertions();

    const log = createGithubLogger({ namespace: LoggerType.GenericOutput });
    const logLog = log.extend(LoggerType.GenericOutput);
    const logLogLog = logLog.extend(LoggerType.GenericOutput);

    expect(getLoggersByType({ type: LoggerType.GenericOutput })).toIncludeSameMembers([
      ...extractAllLoggers(log),
      ...extractAllLoggers(logLog),
      ...extractAllLoggers(logLogLog)
    ]);

    expect(getLoggersByType({ type: LoggerType.All })).toIncludeSameMembers([
      ...extractAllLoggers(log),
      ...extractAllLoggers(logLog),
      ...extractAllLoggers(logLogLog)
    ]);
  });
});
