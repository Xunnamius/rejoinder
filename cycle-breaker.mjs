/* eslint-disable no-console */
/* eslint-disable unicorn/prevent-abbreviations */

/**
 ** This file is NOT managed by symbiote. It is run directly (via node) as part
 ** of the "prepare" and "release" npm scripts. The goal of this file is to
 ** give symbiote its own "un-hoisted" copy of `@-xun/debug` that does not rely
 ** on the version internal to this monorepo. This means installing an aliased
 ** copy of `@-xun/debug` (`@-xun/debug~dev`) into ./node_modules and then
 ** copying its contents into
 ** ./node_modules/@-xun/symbiote/node_modules/@-xun/debug.
 **
 ** We need to do this because of the circular dependency between symbiote and
 ** rejoinder. Rejoinder needs symbiote to bootstrap its dev environment and
 ** build it. Symbiote needs rejoinder to talk to the user about bootstrapping
 ** dev environments and building packages. That means symbiote needs rejoinder
 ** to be built already before symbiote can build it (impossible).
 **
 ** This script breaks the cycle.
 */

// {@symbiote/notExtraneous @-xun/debug~dev}

import { access, mkdir, rename } from 'node:fs/promises';
import { dirname } from 'node:path';

// ! Though this script is run after node_modules is populated, we still can't
// ! use rejoinder here for obvious reasons :)

const prefix = '  symbiote::cycle-breaker:';
const nodeModulesXunDebugDevPackagePath = './node_modules/@-xun/debug~dev';
const nodeModulesXunSymbioteUnhoistedXunDebugPath =
  './node_modules/@-xun/symbiote/node_modules/@-xun/debug';

const debugDevPackageExists = await isAccessible(nodeModulesXunDebugDevPackagePath);
const debugUnhoistedPackageExists = await isAccessible(
  nodeModulesXunSymbioteUnhoistedXunDebugPath
);

if (debugDevPackageExists) {
  if (debugUnhoistedPackageExists) {
    logIfDebug(
      `no action taken because path already exists: ${nodeModulesXunSymbioteUnhoistedXunDebugPath}`
    );
  } else {
    await mkdir(dirname(nodeModulesXunSymbioteUnhoistedXunDebugPath), {
      recursive: true
    });

    await rename(
      nodeModulesXunDebugDevPackagePath,
      nodeModulesXunSymbioteUnhoistedXunDebugPath
    );

    log(
      `installed un-hoisted dependency at: ${nodeModulesXunSymbioteUnhoistedXunDebugPath}`
    );
  }
} else {
  logIfDebug(
    `no action taken because path does not exist: ${nodeModulesXunDebugDevPackagePath}`
  );
}

// TODO: replace access with isAccessible from @-xun/fs
function isAccessible(path) {
  return access(path).then(
    () => true,
    () => false
  );
}

function log(...args) {
  console.log(prefix, ...args);
}

function logIfDebug(...args) {
  if (process.env.DEBUG) {
    console.debug(prefix, ...args);
  }
}
