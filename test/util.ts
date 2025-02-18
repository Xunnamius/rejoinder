/**
 ** This file exports test utilities specific to this project and beyond what is
 ** exported by @-xun/jest; these can be imported using the testversal aliases.
 */

// ? @-xun/jest will always come from @-xun/symbiote (i.e. transitively)
// {@symbiote/notInvalid @-xun/jest}

import { $instances } from 'universe:internal.ts';

import type { ExtendedDebugger, ExtendedLogger } from 'universe';

export * from '@-xun/jest';

/**
 * Returns the logger that was passed in along with any of its properties that
 * are themselves loggers (like `::warn` and `::message`).
 */
export function extractAllLoggers(logger: ExtendedLogger | ExtendedDebugger) {
  return Object.values(logger[$instances]);
}
