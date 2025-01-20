import { Manager } from '@listr2/manager';

import {
  createDebugLogger,
  disableLoggers,
  disableLoggingByTag,
  enableLoggers,
  enableLoggingByTag,
  getLoggersByType,
  LoggerType,
  type ExtendedLogger
} from 'rejoinder';

import { resetInternalState } from 'rejoinder/internal';

import {
  createListrManager,
  createListrTaskLogger,
  type GenericListrTask
} from 'universe+listr2';

import { extractAllLoggers, withMockedEnv, withMockedOutput } from 'testverse:util.ts';

const namespace = 'namespace';
const globalDummyFilter = new RegExp(
  `${LoggerType.DebugOnly}|${LoggerType.GenericOutput}`,
  'g'
);

beforeEach(() => {
  resetInternalState();
});

describe('::createListrTaskLogger', () => {
  it('returns ExtendedLogger instance', async () => {
    expect.hasAssertions();

    const task = { output: null } as unknown as GenericListrTask;
    const log = createListrTaskLogger({ namespace, task });

    expect(log.enabled).toBeTrue();
    expect(log.log).toBeDefined();

    log('logged');
    expect(task.output).toStrictEqual(expect.stringMatching(/namespace.+logged/));
  });

  it('returns instance capable of handling complex input', async () => {
    expect.hasAssertions();

    const task = { output: null } as unknown as GenericListrTask;
    const log = createListrTaskLogger({ namespace, task });

    expect(log.enabled).toBeTrue();
    expect(log.log).toBeDefined();

    log('logged: %O', { success: true });
    expect(task.output).toStrictEqual(
      expect.stringMatching(/namespace.+logged:.+{.+success:.+true.+}/)
    );
  });

  it('returns extensions that can themselves be extended', async () => {
    expect.hasAssertions();

    const task = { output: null } as unknown as GenericListrTask;
    const log = createListrTaskLogger({ namespace, task });
    const extension1 = log.extend(namespace);
    const extension2 = extension1.extend(namespace);

    expect(log.enabled).toBeTrue();
    expect(extension1.enabled).toBeTrue();
    expect(extension2.enabled).toBeTrue();

    expect(log.log).toBeDefined();
    expect(extension1.log).toBeDefined();
    expect(extension2.log).toBeDefined();

    log('logged');
    expect(task.output).toStrictEqual(expect.stringMatching(/namespace.+logged/));

    extension1('logged');
    expect(task.output).toStrictEqual(
      expect.stringMatching(/namespace::namespace.+logged/)
    );

    extension2('logged');
    expect(task.output).toStrictEqual(
      expect.stringMatching(/namespace::namespace:namespace.+logged/)
    );
  });

  it('is unaffected by the presence of tags by default', async () => {
    expect.hasAssertions();

    const outputHistory: string[] = [];
    const task = {
      set output(message: string) {
        outputHistory.push(message);
      }
    } as unknown as GenericListrTask;

    const log = createListrTaskLogger({ namespace, task });
    const extension = log.extend(namespace);

    log(['tag-1', 'tag-2'], 'logged: %O', { success: true });
    log.error(['tag-1', 'tag-2'], 'logged: %O', { success: true });
    log.message(['tag-1', 'tag-2'], 'logged: %O', { success: true });
    log.warn(['tag-1', 'tag-2'], 'logged: %O', { success: true });
    log.newline(['tag-1', 'tag-2']);

    extension(['tag-1', 'tag-2'], 'logged');
    extension.error(['tag-1', 'tag-2'], 'logged');
    extension.message(['tag-1', 'tag-2'], 'logged');
    extension.warn(['tag-1', 'tag-2'], 'logged');
    extension.newline(['tag-1', 'tag-2']);

    expect(outputHistory).toStrictEqual([
      expect.stringMatching(/namespace.+logged:.+{.+success:.+true.+}/),
      expect.stringMatching(/namespace::<error>.+logged:.+{.+success:.+true.+}/),
      expect.stringMatching(/namespace::<message>.+logged:.+{.+success:.+true.+}/),
      expect.stringMatching(/namespace::<warn>.+logged:.+{.+success:.+true.+}/),
      expect.stringMatching(/namespace::namespace.+logged/),
      expect.stringMatching(/namespace::namespace:<error>.+logged/),
      expect.stringMatching(/namespace::namespace:<message>.+logged/),
      expect.stringMatching(/namespace::namespace:<warn>.+logged/)
    ]);
  });

  it('propagates ::enabled mutations to sub-instances', async () => {
    expect.hasAssertions();

    const outputHistory: string[] = [];
    const task = {
      set output(message: string) {
        outputHistory.push(message);
      }
    } as unknown as GenericListrTask;

    const log = createListrTaskLogger({ namespace, task });
    const extension = log.extend(namespace);

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

    expect(outputHistory).toStrictEqual([
      expect.stringMatching(/namespace.+logged:.+{.+success:.+true.+}/),
      expect.stringMatching(/namespace::<error>.+logged:.+{.+success:.+true.+}/),
      expect.stringMatching(/namespace::<message>.+logged:.+{.+success:.+true.+}/),
      expect.stringMatching(/namespace::<warn>.+logged:.+{.+success:.+true.+}/),
      expect.stringMatching(/namespace::namespace.+logged/),
      expect.stringMatching(/namespace::namespace:<error>.+logged/),
      expect.stringMatching(/namespace::namespace:<message>.+logged/),
      expect.stringMatching(/namespace::namespace:<warn>.+logged/)
    ]);
  });

  it('outputs correctly given multiple arguments', async () => {
    expect.hasAssertions();

    const outputHistory: string[] = [];
    const task = {
      set output(message: string) {
        outputHistory.push(message);
      }
    } as unknown as GenericListrTask;

    const log = createListrTaskLogger({ namespace, task });
    log('1', 2, { three: true }, 'four ::five:: six');
    log.message('1', 2, { three: true }, 'four ::five:: six');

    expect(outputHistory).toStrictEqual([
      expect.stringMatching(/namespace: 1 2 {.+three:.+true.+} four ::five:: six/),
      expect.stringMatching(
        /namespace::<message> 1 2 {.+three:.+true.+} four ::five:: six/
      )
    ]);
  });

  it('works when first argument is not a string', async () => {
    expect.hasAssertions();

    const outputHistory: string[] = [];
    const task = {
      set output(message: string) {
        outputHistory.push(message);
      }
    } as unknown as GenericListrTask;

    const log = createListrTaskLogger({ namespace, task });
    log({ success: true });
    log.warn({ success: true });

    expect(outputHistory).toStrictEqual([
      expect.stringMatching(/namespace: {.+success:.+true.+}/),
      expect.stringMatching(/namespace::<warn> {.+success:.+true.+}/)
    ]);
  });
});

describe('::createListrManager', () => {
  it('returns Listr2 Manager instance', async () => {
    expect.hasAssertions();
    expect(createListrManager()).toBeInstanceOf(Manager);
  });

  it('returns a Manager using default renderer by default', async () => {
    expect.hasAssertions();

    await withMockedEnv(() => {
      expect(createListrManager().options?.renderer).toBe('default');
    }, {});
  });

  it('returns a Manager using fallback renderer if process.env.DEBUG is present', async () => {
    expect.hasAssertions();

    await withMockedEnv(
      () => {
        const { fallbackRendererCondition: fallback } =
          createListrManager().options ?? {};

        expect(typeof fallback === 'boolean' ? fallback : fallback?.()).toBeTrue();
      },
      { DEBUG: '*:*' }
    );
  });

  it('returns a Manager using fallback renderer if any debug loggers are enabled', async () => {
    expect.hasAssertions();

    createDebugLogger({ namespace }).enabled = true;

    await withMockedEnv(() => {
      const { fallbackRendererCondition: fallback } = createListrManager().options ?? {};

      expect(typeof fallback === 'boolean' ? fallback : fallback?.()).toBeTrue();
    }, {});
  });
});

describe('::disableLoggers', () => {
  const loggers: {
    listr: ExtendedLogger;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = {} as any;

  beforeEach(() => {
    loggers.listr = createListrTaskLogger({
      namespace: 'listr',
      task: { output: '' } as GenericListrTask
    });

    loggers.listr.log = jest.fn();
  });

  it('disables all possible loggers if no filter specified', async () => {
    expect.hasAssertions();

    expect(loggers.listr.enabled).toBeTrue();

    disableLoggers({ type: LoggerType.All });

    expect(loggers.listr.enabled).toBeFalse();
  });

  it('leaves disabled loggers disabled', async () => {
    expect.hasAssertions();

    expect(loggers.listr.enabled).toBeTrue();

    disableLoggers({ type: LoggerType.All });

    expect(loggers.listr.enabled).toBeFalse();

    disableLoggers({ type: LoggerType.All });

    expect(loggers.listr.enabled).toBeFalse();
  });

  it('disables loggers by namespace string exact match', async () => {
    expect.hasAssertions();

    expect(loggers.listr.enabled).toBeTrue();

    disableLoggers({ type: LoggerType.All, filter: LoggerType.GenericOutput });

    expect(loggers.listr.enabled).toBeTrue();

    disableLoggers({ type: LoggerType.All, filter: 'listr' });

    expect(loggers.listr.enabled).toBeFalse();

    disableLoggers({ type: LoggerType.All, filter: LoggerType.DebugOnly });

    expect(loggers.listr.enabled).toBeFalse();

    disableLoggers({ type: LoggerType.All, filter: LoggerType.DebugOnly });
  });

  it('disables loggers by namespace regex match', async () => {
    expect.hasAssertions();

    expect(loggers.listr.enabled).toBeTrue();

    disableLoggers({ type: LoggerType.All, filter: globalDummyFilter });

    expect(loggers.listr.enabled).toBeTrue();
  });

  it('does not reuse stateful RegExp instances', async () => {
    expect.hasAssertions();

    loggers.listr.enabled = true;

    const parameters = {
      type: LoggerType.All,
      filter: globalDummyFilter
    } as const;

    disableLoggers(parameters);

    expect(loggers.listr.enabled).toBeTrue();

    loggers.listr.enabled = true;

    disableLoggers(parameters);

    expect(loggers.listr.enabled).toBeTrue();
  });

  it('disables loggers by type match', async () => {
    expect.hasAssertions();

    expect(loggers.listr.enabled).toBeTrue();

    disableLoggers({ type: LoggerType.GenericOutput });

    expect(loggers.listr.enabled).toBeFalse();

    loggers.listr.enabled = true;

    disableLoggers({ type: LoggerType.DebugOnly });

    expect(loggers.listr.enabled).toBeTrue();
  });

  it('does not disable loggers with unsound combinations of matchers', async () => {
    expect.hasAssertions();

    expect(loggers.listr.enabled).toBeTrue();

    disableLoggers({ type: LoggerType.All, filter: 'no-match' });

    expect(loggers.listr.enabled).toBeTrue();

    disableLoggers({
      type: LoggerType.DebugOnly,
      filter: new RegExp(`${LoggerType.GenericOutput}|listr`)
    });

    expect(loggers.listr.enabled).toBeTrue();

    disableLoggers({
      type: LoggerType.GenericOutput,
      filter: new RegExp(LoggerType.DebugOnly)
    });

    expect(loggers.listr.enabled).toBeTrue();
  });
});

describe('::enableLoggers', () => {
  const loggers: {
    listr: ExtendedLogger;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = {} as any;

  beforeEach(() => {
    loggers.listr = createListrTaskLogger({
      namespace: 'listr',
      task: { output: '' } as GenericListrTask
    });

    loggers.listr.log = jest.fn();
  });

  it('enables all possible loggers if no filter specified', async () => {
    expect.hasAssertions();

    expect(loggers.listr.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All });

    expect(loggers.listr.enabled).toBeTrue();
  });

  it('leaves enabled loggers enabled', async () => {
    expect.hasAssertions();

    expect(loggers.listr.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All });

    expect(loggers.listr.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All });

    expect(loggers.listr.enabled).toBeTrue();
  });

  it('enables loggers by namespace string exact match', async () => {
    expect.hasAssertions();

    expect(loggers.listr.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All, filter: LoggerType.GenericOutput });

    expect(loggers.listr.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All, filter: 'listr' });

    expect(loggers.listr.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All, filter: LoggerType.DebugOnly });

    expect(loggers.listr.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All, filter: LoggerType.GenericOutput });
  });

  it('enables loggers by namespace regex match', async () => {
    expect.hasAssertions();

    expect(loggers.listr.enabled).toBeTrue();

    enableLoggers({ type: LoggerType.All, filter: globalDummyFilter });

    expect(loggers.listr.enabled).toBeTrue();
  });

  it('does not reuse stateful RegExp instances', async () => {
    expect.hasAssertions();

    loggers.listr.enabled = false;

    const parameters = { type: LoggerType.All, filter: globalDummyFilter } as const;

    enableLoggers(parameters);

    expect(loggers.listr.enabled).toBeFalse();

    loggers.listr.enabled = false;

    enableLoggers(parameters);

    expect(loggers.listr.enabled).toBeFalse();
  });

  it('enables loggers by type match', async () => {
    expect.hasAssertions();

    loggers.listr.enabled = false;

    expect(loggers.listr.enabled).toBeFalse();

    enableLoggers({ type: LoggerType.GenericOutput });

    expect(loggers.listr.enabled).toBeTrue();

    loggers.listr.enabled = false;

    enableLoggers({ type: LoggerType.DebugOnly });

    expect(loggers.listr.enabled).toBeFalse();
  });

  it('does not enable loggers with unsound combinations of matchers', async () => {
    expect.hasAssertions();

    loggers.listr.enabled = false;

    expect(loggers.listr.enabled).toBeFalse();

    enableLoggers({ type: LoggerType.All, filter: 'no-match' });

    expect(loggers.listr.enabled).toBeFalse();

    enableLoggers({
      type: LoggerType.DebugOnly,
      filter: new RegExp(`${LoggerType.GenericOutput}|listr`)
    });

    expect(loggers.listr.enabled).toBeFalse();

    enableLoggers({
      type: LoggerType.GenericOutput,
      filter: new RegExp(LoggerType.DebugOnly)
    });

    expect(loggers.listr.enabled).toBeFalse();
  });
});

describe('::disableLoggingByTag', () => {
  it('can disable logging across logger types including sub-loggers by tag', async () => {
    expect.hasAssertions();

    const task = { output: '' } as unknown as GenericListrTask;
    const listr = createListrTaskLogger({ namespace, task });
    const listrExtended = listr.extend(namespace);

    await withMockedOutput(({ logSpy }) => {
      listr(['tag-2'], 'message: %O', { success: true });

      expect(logSpy.mock.calls).toBeEmpty();
      expect(task.output).toMatch(/namespace.+message:.+{.+success:.+true.+}/);

      task.output = '';
      listrExtended(['tag-2'], 'message: %O', { success: true });
      expect(task.output).toMatch(/namespace.+message:.+{.+success:.+true.+}/);
    });

    task.output = '';
    disableLoggingByTag({ tags: ['tag-2'] });

    await withMockedOutput(({ logSpy }) => {
      listr(['tag-2'], 'message: %O', { success: true });

      expect(logSpy.mock.calls).toBeEmpty();
      expect(task.output).toBeEmpty();

      listrExtended(['tag-2'], 'message: %O', { success: true });
      expect(task.output).toBeEmpty();
    });

    disableLoggingByTag({ tags: ['tag-1', 'tag-2', 'tag-3'] });

    await withMockedOutput(({ logSpy }) => {
      listr(['tag-2'], 'message: %O', { success: true });

      expect(logSpy.mock.calls).toBeEmpty();
      expect(task.output).toBeEmpty();

      listrExtended(['tag-2'], 'message: %O', { success: true });
      expect(task.output).toBeEmpty();
    });
  });

  it('does not prevent tag-less log calls from executing successfully', async () => {
    expect.hasAssertions();

    const task = { output: '' } as unknown as GenericListrTask;
    const listr = createListrTaskLogger({ namespace, task });

    disableLoggingByTag({ tags: ['tag-1', 'tag-2', 'tag-3'] });

    await withMockedOutput(({ logSpy }) => {
      listr('message: %O', { success: true });

      expect(logSpy.mock.calls).toBeEmpty();
      expect(task.output).toMatch(/namespace.+message:.+{.+success:.+true.+}/);
    });
  });
});

describe('::enableLoggingByTag', () => {
  it('can enable logging across logger types including sub-loggers by tag', async () => {
    expect.hasAssertions();

    const task = { output: '' } as unknown as GenericListrTask;
    const listr = createListrTaskLogger({ namespace, task });
    const listrExtended = listr.extend(namespace);

    disableLoggingByTag({ tags: ['tag-1', 'tag-2', 'tag-3'] });

    await withMockedOutput(({ logSpy }) => {
      listr(['tag-2'], 'message: %O', { success: true });

      expect(logSpy.mock.calls).toBeEmpty();
      expect(task.output).toBeEmpty();

      listrExtended(['tag-2'], 'message: %O', { success: true });
      expect(task.output).toBeEmpty();
    });

    enableLoggingByTag({ tags: ['tag-2'] });

    await withMockedOutput(({ logSpy }) => {
      listr(['tag-2'], 'message: %O', { success: true });

      expect(logSpy.mock.calls).toBeEmpty();
      expect(task.output).toMatch(/namespace.+message:.+{.+success:.+true.+}/);

      task.output = '';
      listrExtended(['tag-2'], 'message: %O', { success: true });
      expect(task.output).toMatch(/namespace.+message:.+{.+success:.+true.+}/);
    });

    enableLoggingByTag({ tags: ['tag-1', 'tag-2', 'tag-3'] });

    await withMockedOutput(({ logSpy }) => {
      listr(['tag-2'], 'message: %O', { success: true });

      expect(logSpy.mock.calls).toBeEmpty();
      expect(task.output).toMatch(/namespace.+message:.+{.+success:.+true.+}/);

      task.output = '';
      listrExtended(['tag-2'], 'message: %O', { success: true });
      expect(task.output).toMatch(/namespace.+message:.+{.+success:.+true.+}/);
    });
  });

  it('does not prevent tag-less log calls from executing successfully', async () => {
    expect.hasAssertions();

    const task = { output: '' } as unknown as GenericListrTask;
    const listr = createListrTaskLogger({ namespace, task });

    enableLoggingByTag({ tags: ['tag-1', 'tag-2', 'tag-3'] });

    await withMockedOutput(({ logSpy }) => {
      listr('message: %O', { success: true });

      expect(logSpy.mock.calls).toBeEmpty();
      expect(task.output).toMatch(/namespace.+message:.+{.+success:.+true.+}/);
    });
  });
});

describe('::getLoggersByType', () => {
  it('returns subset of loggers by type', async () => {
    expect.hasAssertions();

    const listr1 = createListrTaskLogger({
      namespace: 'listr',
      task: { output: '' } as GenericListrTask
    });

    const listr2 = createListrTaskLogger({
      namespace: 'listr',
      task: { output: '' } as GenericListrTask
    });

    const listr11 = listr1.extend('1');

    expect(getLoggersByType({ type: LoggerType.All })).toIncludeSameMembers([
      ...extractAllLoggers(listr1),
      ...extractAllLoggers(listr2),
      ...extractAllLoggers(listr11)
    ]);

    expect(getLoggersByType({ type: LoggerType.DebugOnly })).toIncludeSameMembers([]);

    expect(getLoggersByType({ type: LoggerType.GenericOutput })).toIncludeSameMembers([
      ...extractAllLoggers(listr1),
      ...extractAllLoggers(listr2),
      ...extractAllLoggers(listr11)
    ]);
  });

  it('skips returning internal loggers when includeInternal is disabled', async () => {
    expect.hasAssertions();

    const listr1 = createListrTaskLogger({
      namespace: 'listr',
      task: { output: '' } as GenericListrTask
    });

    const listr2 = createListrTaskLogger({
      namespace: 'listr',
      task: { output: '' } as GenericListrTask
    });

    const listr11 = listr1.extend('1');

    expect(
      getLoggersByType({ type: LoggerType.All, includeInternal: false })
    ).toIncludeSameMembers([listr1, listr2, listr11]);

    expect(
      getLoggersByType({ type: LoggerType.DebugOnly, includeInternal: false })
    ).toIncludeSameMembers([]);

    expect(
      getLoggersByType({ type: LoggerType.GenericOutput, includeInternal: false })
    ).toIncludeSameMembers([listr1, listr2, listr11]);
  });
});
