import { debug as oldDebug } from 'debug';

import {
  $instances,
  debugFactory,
  extendDebugger,
  finalizeDebugger
} from 'rootverse+debug:src/index.ts';

import {
  expectExtendedDebugger,
  expectUnextendableDebugger
} from 'testverse+debug:helpers.ts';

import { isolatedImport, withMockedEnv } from 'testverse:util.ts';

const factoryLogFn = jest.fn();
debugFactory.log = factoryLogFn;

afterEach(() => debugFactory.disable());

describe('::debugFactory', () => {
  it('is not enabled when first initialized', async () => {
    expect.hasAssertions();

    expect(debugFactory.enabled('namespace')).toBeFalse();

    debugFactory('namespace');

    expect(debugFactory.enabled('namespace')).toBeFalse();

    debugFactory.enable('namespace');

    expect(debugFactory.enabled('namespace')).toBeTrue();
  });

  it('returns ExtendedDebugger instances', async () => {
    expect.hasAssertions();
    expectExtendedDebugger(debugFactory('namespace'));
  });

  it('always appends a separator character to root namespace arguments that do not include one', () => {
    expect.hasAssertions();

    {
      const log = debugFactory('namespace');
      expect(log.namespace).toBe('namespace:');
    }

    {
      const log = debugFactory('namespace:');
      expect(log.namespace).toBe('namespace:');
    }
  });

  it('double-colon workaround preserves and expands simple process.env.DEBUG activation behavior', async () => {
    expect.hasAssertions();

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(jest.mocked(extendedDebugger.log).mock.calls).toStrictEqual([
          [expect.stringContaining('test message #1')]
        ]);
      },
      { DEBUG: 'namespace', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(jest.mocked(extendedDebugger.log).mock.calls).toStrictEqual([
          [expect.stringContaining('test message #1')]
        ]);
      },
      { DEBUG: 'namespace:', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(jest.mocked(extendedDebugger.log).mock.calls).toStrictEqual([
          [expect.stringContaining('test message #1')],
          [expect.stringContaining('test message #2')],
          [expect.stringContaining('test message #3')]
        ]);
      },
      { DEBUG: 'namespace*', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(jest.mocked(extendedDebugger.log).mock.calls).toStrictEqual([
          [expect.stringContaining('test message #1')],
          [expect.stringContaining('test message #2')],
          [expect.stringContaining('test message #3')]
        ]);
      },
      { DEBUG: 'namespace:*', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(jest.mocked(extendedDebugger.log).mock.calls).toStrictEqual([
          [expect.stringContaining('test message #2')]
        ]);
      },
      { DEBUG: 'namespace:sub-namespace', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(jest.mocked(extendedDebugger.log).mock.calls).toStrictEqual([
          [expect.stringContaining('test message #2')],
          [expect.stringContaining('test message #3')]
        ]);
      },
      { DEBUG: 'namespace:sub-namespace*', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(jest.mocked(extendedDebugger.log).mock.calls).toStrictEqual([
          [expect.stringContaining('test message #3')]
        ]);
      },
      { DEBUG: 'namespace:sub-namespace:*', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(extendedDebugger.log).not.toHaveBeenCalled();
      },
      { DEBUG: 'another-namespace*', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(jest.mocked(extendedDebugger.log).mock.calls).toStrictEqual([
          [expect.stringContaining('test message #1')],
          [expect.stringContaining('test message #2')],
          [expect.stringContaining('test message #3')]
        ]);
      },
      { DEBUG: '*', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(jest.mocked(extendedDebugger.log).mock.calls).toStrictEqual([
          [expect.stringContaining('test message #2')],
          [expect.stringContaining('test message #3')]
        ]);
      },
      { DEBUG: '*,-namespace', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(extendedDebugger.log).not.toHaveBeenCalled();
      },
      { DEBUG: '*,-namespace*', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(extendedDebugger.log).not.toHaveBeenCalled();
      },
      { DEBUG: '*,-namespace:*', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(jest.mocked(extendedDebugger.log).mock.calls).toStrictEqual([
          [expect.stringContaining('test message #1')],
          [expect.stringContaining('test message #3')]
        ]);
      },
      { DEBUG: '*,-namespace:sub-namespace', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(jest.mocked(extendedDebugger.log).mock.calls).toStrictEqual([
          [expect.stringContaining('test message #1')]
        ]);
      },
      { DEBUG: '*,-namespace:sub-namespace*', DEBUG_COLORS: 'false' },
      { replace: true }
    );

    await withMockedEnv(
      () => {
        const extendedDebugger = isolatedImport<
          typeof import('rootverse+debug:src/index.ts')
        >({ path: 'rootverse+debug:src/index.ts' }).debugFactory('namespace');

        extendedDebugger.log = jest.fn();
        extendedDebugger('test message #1');
        const d = extendedDebugger.extend('sub-namespace');
        d('test message #2');
        d.extend('sub-sub-namespace')('test message #3');

        expect(jest.mocked(extendedDebugger.log).mock.calls).toStrictEqual([
          [expect.stringContaining('test message #1')],
          [expect.stringContaining('test message #2')]
        ]);
      },
      { DEBUG: '*,-namespace:sub-namespace:*', DEBUG_COLORS: 'false' },
      { replace: true }
    );
  });
});

describe('::extendDebugger', () => {
  it('returns an extended instance with expected properties and methods', async () => {
    expect.hasAssertions();

    const debug = oldDebug('namespace');
    const extended = extendDebugger(debug);

    expectExtendedDebugger(extended);
  });
});

describe('::finalizeDebugger', () => {
  it('returns a finalized instance with expected properties and methods', async () => {
    expect.hasAssertions();

    const debug = oldDebug('namespace');
    const finalized = finalizeDebugger(debug);

    expectUnextendableDebugger(finalized);
  });
});

describe('::ExtendedDebugger', () => {
  describe('::[enable,enabled,selectColor]', () => {
    it('accepts root namespaces without colons and appends one internally', async () => {
      expect.hasAssertions();

      const debug = debugFactory('namespace');

      expect(debug.enabled).toBeFalsy();
      expect(debugFactory.enabled('namespace')).toBeFalse();

      debugFactory.enable('namespace');

      expect(debug.enabled).toBeTrue();
      expect(debugFactory.enabled('namespace')).toBeTrue();

      expect(debugFactory.selectColor('namespace')).toBe(debug.color);
      expect(debug.color).not.toBe(debug.extend('different').color);
    });

    it('propagates ::enabled mutations only to sub-instances but not the inverse', () => {
      expect.hasAssertions();

      const debug = debugFactory('namespace');
      const debugDebug = debug.extend('namespace');

      expect(debug.enabled).toBeFalsy();
      expect(debugDebug.enabled).toBeFalsy();
      expect(debug.message.enabled).toBeFalsy();
      expect(debug.warn.enabled).toBeFalsy();
      expect(debug.error.enabled).toBeFalsy();

      debug.enabled = true;

      expect(debug.enabled).toBeTrue();
      expect(debugDebug.enabled).toBeFalsy();
      expect(debug.message.enabled).toBeTrue();
      expect(debug.warn.enabled).toBeTrue();
      expect(debug.error.enabled).toBeTrue();

      debug.enabled = false;

      expect(debug.enabled).toBeFalse();
      expect(debugDebug.enabled).toBeFalsy();
      expect(debug.message.enabled).toBeFalse();
      expect(debug.warn.enabled).toBeFalse();
      expect(debug.error.enabled).toBeFalse();

      debug.message.enabled = true;

      expect(debug.enabled).toBeFalse();
      expect(debugDebug.enabled).toBeFalsy();
      expect(debug.message.enabled).toBeTrue();
      expect(debug.warn.enabled).toBeFalse();
      expect(debug.error.enabled).toBeFalse();

      debugDebug.enabled = true;

      expect(debug.enabled).toBeFalse();
      expect(debugDebug.enabled).toBeTrue();
      expect(debug.message.enabled).toBeTrue();
      expect(debug.warn.enabled).toBeFalse();
      expect(debug.error.enabled).toBeFalse();
    });
  });

  describe('::extend', () => {
    it('returns an instance with expected properties and methods', async () => {
      expect.hasAssertions();

      const debug = debugFactory('namespace');
      const extended = debug.extend('extended');

      expectExtendedDebugger(extended);
    });
  });

  describe('::newline', () => {
    it('calls internal logger function with empty string', async () => {
      expect.hasAssertions();

      const debug = debugFactory('namespace');
      const logFn = (debug.log = jest.fn());

      debug.enabled = true;
      debug.newline();

      expect(logFn.mock.calls).toStrictEqual([['']]);
      expect(factoryLogFn.mock.calls).toStrictEqual([]);
    });

    it('calls debugFactory.log with empty string if debug.log not set', async () => {
      expect.hasAssertions();

      const debug = debugFactory('namespace');

      debug.enabled = true;
      debug.log = undefined;
      debug.newline();

      expect(factoryLogFn.mock.calls).toStrictEqual([['']]);
    });

    it('calls nothing if instance is not enabled', async () => {
      expect.hasAssertions();

      expect(debugFactory.enabled('namespace')).toBeFalse();
      const debug = debugFactory('namespace');
      const logFn = (debug.log = jest.fn());

      expect(debug.enabled).toBeFalse();
      debug.newline();

      expect(logFn.mock.calls).toStrictEqual([]);
      expect(factoryLogFn.mock.calls).toStrictEqual([]);
    });
  });

  describe('::[$instances] (and named convenience methods)', () => {
    it('returns all sub-instances attached to the current instance', async () => {
      expect.hasAssertions();

      const debug = debugFactory('namespace');
      const extended = debug.extend('namespace');
      const { $log: log, message, warn, error, ...rest } = debug[$instances];

      expect(rest).toStrictEqual({});
      expect(log).toBe(debug);

      expectUnextendableDebugger(message);
      expectUnextendableDebugger(warn);
      expectUnextendableDebugger(error);

      expectUnextendableDebugger(extended.message);
      expectUnextendableDebugger(extended.warn);
      expectUnextendableDebugger(extended.error);
    });
  });
});
