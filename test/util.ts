/**
 ** This file exports test utilities specific to this project and beyond what is
 ** exported by @-xun/test; these can be imported using the testversal aliases.
 */

import assert from 'node:assert';

import { $instances } from 'universe:internal.ts';

import type { Promisable } from 'type-fest';
import type { ExtendedDebugger, ExtendedLogger } from 'universe';

// TODO:
//export * from '@-xun/test';

/**
 * Returns the logger that was passed in along with any of its properties that
 * are themselves loggers (like `::warn` and `::message`).
 */
export function extractAllLoggers(logger: ExtendedLogger | ExtendedDebugger) {
  return Object.values(logger[$instances]);
}

// TODO: delete all of the below in favor of @-xun/test

export type MockEnvOptions = {
  /**
   * By default, the `process.env` object is emptied and re-hydrated with
   * `newEnv`. Setting `replace` to `false` will cause `newEnv` to be appended
   * instead
   * @default true
   */
  replace?: boolean;
};

export async function withMockedEnv(
  test: () => Promisable<void>,
  simulatedEnv: Record<string, string>,
  // eslint-disable-next-line unicorn/no-object-as-default-parameter
  options: MockEnvOptions = { replace: true }
) {
  const previousEnv = { ...process.env };
  const clearEnv = () => {
    Object.getOwnPropertyNames(process.env).forEach((property) => {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete process.env[property];
    });
  };

  // ? Take care to preserve the original env object reference in memory
  if (options.replace) clearEnv();
  Object.assign(process.env, simulatedEnv);

  await test();

  clearEnv();
  Object.assign(process.env, previousEnv);
}

export type MockedOutputOptions = {
  /**
   * If `true`, whenever `process.env.DEBUG` is present, output functions will
   * still be spied on but their implementations will not be mocked, allowing
   * debug output to make it to the screen.
   *
   * @default true
   */
  passthroughOutputIfDebugging?: boolean;
  /**
   * Call `::mockRestore` on one or more output functions currently being spied
   * upon.
   */
  passthrough?: ('log' | 'warn' | 'error' | 'info' | 'stdout' | 'stderr')[];
};

export async function withMockedOutput(
  test: (spies: {
    logSpy: jest.SpyInstance;
    warnSpy: jest.SpyInstance;
    errorSpy: jest.SpyInstance;
    infoSpy: jest.SpyInstance;
    stdoutSpy: jest.SpyInstance;
    stderrSpy: jest.SpyInstance;
  }) => Promisable<unknown>,
  { passthrough = [], passthroughOutputIfDebugging = true }: MockedOutputOptions = {}
) {
  const spies = {
    logSpy: jest.spyOn(console, 'log'),
    warnSpy: jest.spyOn(console, 'warn'),
    errorSpy: jest.spyOn(console, 'error'),
    infoSpy: jest.spyOn(console, 'info'),
    stdoutSpy: jest.spyOn(process.stdout, 'write'),
    stderrSpy: jest.spyOn(process.stderr, 'write')
  };

  const $wasAccessed = Symbol.for('@xunnamius:was-accessed');
  const noDebugPassthrough = !process.env.DEBUG || !passthroughOutputIfDebugging;

  for (const [name, spy] of Object.entries(spies)) {
    // ? If we're debugging, show all outputs instead of swallowing them
    if (
      noDebugPassthrough &&
      !passthrough.includes(name as (typeof passthrough)[number])
    ) {
      if (name.startsWith('std')) {
        spy.mockImplementation(() => true);
      } else {
        // @ts-expect-error: TypeScript isn't smart enough to figure this out
        spy.mockImplementation(() => undefined);
      }
    }

    // ? Sometimes useful warnings/errors and what not are swallowed when all we
    // ? really wanted was to track log/stdout calls, or vice-versa. To prevent
    // ? this, we expect that our spies have not been called at all UNLESS the
    // ? caller of withMockedOutput uses the spy (accesses a property).
    let wasAccessed = false;
    // @ts-expect-error: TypeScript isn't smart enough to figure this out
    spies[name as keyof typeof spies] =
      //
      new Proxy(spy, {
        get(target, property) {
          if (property === $wasAccessed) {
            return wasAccessed;
          }

          wasAccessed = true;

          const value: unknown =
            // @ts-expect-error: TypeScript isn't smart enough to figure this out
            target[property];

          // ? It's what the MDN example uses, so we shall use it too
          // eslint-disable-next-line no-restricted-syntax
          if (value instanceof Function) {
            return function (...args: unknown[]) {
              // ? "this-recovering" code
              return value.apply(target, args);
            };
          }

          return value;
        }
      });
  }

  try {
    await test(spies);

    // ? Let us know when output was swallowed unexpectedly
    for (const [name, spy] of Object.entries(spies)) {
      if (
        noDebugPassthrough &&
        !passthrough.includes(name as (typeof passthrough)[number])
      ) {
        const wasAccessed = (spy as typeof spy & { [$wasAccessed]: boolean })[
          $wasAccessed
        ];

        assert(typeof wasAccessed === 'boolean');

        if (!wasAccessed) {
          expect({
            'failing-spy': name,
            'unexpected-output': spy.mock.calls
          }).toStrictEqual({ 'failing-spy': name, 'unexpected-output': [] });
        }
      }
    }
  } finally {
    spies.logSpy.mockRestore();
    spies.warnSpy.mockRestore();
    spies.errorSpy.mockRestore();
    spies.infoSpy.mockRestore();
    spies.stdoutSpy.mockRestore();
    spies.stderrSpy.mockRestore();
  }
}

/**
 * Performs a module import as if it were being imported for the first time.
 *
 * Note that this function breaks the "require caching" expectation of Node.js
 * modules. Problems can arise, for example, when closing an app-wide database
 * connection in your test cleanup phase and expecting it to close for the
 * isolated module too. In this case, the isolated module has its own isolated
 * "app-wide" connection that would not actually be closed and could cause your
 * test to hang unexpectedly, even when all tests pass.
 */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export function isolatedImport<T = unknown>(args: {
  /**
   * Path to the module to import. Module resolution is handled by `require`.
   */
  path: string;
  /**
   * By default, if `module.__esModule === true`, the default export will be
   * returned instead. Use `useDefault` to override this behavior in either
   * direction.
   */
  useDefault?: boolean;
}) {
  let package_: T | undefined;

  // ? Cache-busting
  jest.isolateModules(() => {
    package_ = ((r) => {
      return r.default &&
        (args.useDefault === true ||
          (args.useDefault !== false && r.__esModule && Object.keys(r).length === 1))
        ? r.default
        : r;
    })(require(args.path));
  });

  return package_ as T;
}
