import { debug as oldDebug } from 'debug';

import {
  $instances,
  debugFactory,
  extendDebugger,
  finalizeDebugger
} from 'universe+debug';

import {
  expectExtendedDebugger,
  expectUnextendableDebugger
} from 'testverse+debug:helpers.ts';

import type { ExtendedDebugger, With$instances } from 'universe+debug';

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
    it('accepts root namespaces', async () => {
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

    it('returns an instance with ::log inherited from its parent instance', async () => {
      expect.hasAssertions();

      {
        const debug = debugFactory('namespace');
        const extended = debug.extend('extended');
        expect(debug.log).toBe(extended.log);
      }

      {
        const debug = debugFactory('namespace');
        debug.log = () => 'abc';
        const extended = debug.extend('extended');
        expect(debug.log).toBe(extended.log);
      }
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

  describe('::$instances', () => {
    it('returns all sub-instances attached to the current instance', async () => {
      expect.hasAssertions();

      const debug = debugFactory('namespace');
      const extended = debug.extend('namespace');
      const {
        $log: log,
        message,
        warn,
        error,
        ...rest
      } = (debug as With$instances<ExtendedDebugger>)[$instances];

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
