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

// ! BEWARE that symbiote's release command executes with the NODE_OPTIONS
// ! environment variable set to:
// !   --require @-xun/symbiote/assets/conventional.config.cjs
// !
// ! This means running this file as part of symbiote's release command may
// ! still pull in various imports (such as rejoinder), which may not be
// ! desired. To avoid this issue in said context, make sure to invoke this file
// ! with NODE_OPTIONS unset.

// {@symbiote/notExtraneous @-xun/debug~dev}
// {@symbiote/notExtraneous rejoinder~dev}

import { access, cp, mkdir, rm, symlink } from 'node:fs/promises';
import { dirname, relative } from 'node:path';

// ! Though this script is run after node_modules is populated, we still can't
// ! use rejoinder here for obvious reasons :)

const prefix = '  symbiote::cycle-breaker:';
const rejoinderPath = './node_modules/rejoinder';
const devRejoinderPath = './node_modules/rejoinder~dev';
const devDebugPath = './node_modules/@-xun/debug~dev';
const devRejoinderUnhoistedDebugPath =
  './node_modules/rejoinder~dev/node_modules/@-xun/debug';
const symbioteUnhoistedDebugPath =
  './node_modules/@-xun/symbiote/node_modules/@-xun/debug';
const symbioteUnhoistedRejoinderPath =
  './node_modules/@-xun/symbiote/node_modules/rejoinder';

const rejoinderExists = await isAccessible(rejoinderPath);
const devDebugExists = await isAccessible(devDebugPath);
const devRejoinderExists = await isAccessible(devRejoinderPath);
const devRejoinderUnhoistedDebugExists = await isAccessible(
  devRejoinderUnhoistedDebugPath
);
const symbioteUnhoistedDebugExists = await isAccessible(symbioteUnhoistedDebugPath);
const symbioteUnhoistedRejoinderExists = await isAccessible(
  symbioteUnhoistedRejoinderPath
);

if (rejoinderExists) {
  await rm(rejoinderPath, { maxRetries: 10, recursive: true });

  // TODO: replace this with toRelativePath from @-xun/fs
  const nodeModulesRelativeProjectRoot = relative(dirname(rejoinderPath), '.');

  await symlink(nodeModulesRelativeProjectRoot, rejoinderPath, 'junction');

  log(
    `installed dependency symlink: ${rejoinderPath} => ${nodeModulesRelativeProjectRoot}`
  );
} else {
  logIfDebug(`path does not exist: ${rejoinderPath}`);
}

if (devDebugExists) {
  if (symbioteUnhoistedDebugExists) {
    logIfDebug(`path already exists: ${symbioteUnhoistedDebugPath}`);
  } else {
    await mkdir(dirname(symbioteUnhoistedDebugPath), {
      recursive: true
    });

    await cp(devDebugPath, symbioteUnhoistedDebugPath, {
      recursive: true,
      verbatimSymlinks: true,
      force: true
    });

    log(`installed un-hoisted dependency at: ${symbioteUnhoistedDebugPath}`);
  }
} else {
  logIfDebug(`path does not exist: ${devDebugPath}`);
}

if (devRejoinderExists) {
  if (symbioteUnhoistedRejoinderExists) {
    logIfDebug(`path already exists: ${symbioteUnhoistedRejoinderPath}`);
  } else {
    await mkdir(dirname(symbioteUnhoistedRejoinderPath), {
      recursive: true
    });

    await cp(devRejoinderPath, symbioteUnhoistedRejoinderPath, {
      recursive: true,
      verbatimSymlinks: true,
      force: true
    });

    log(`installed un-hoisted dependency at: ${symbioteUnhoistedRejoinderPath}`);
  }
} else {
  logIfDebug(`path does not exist: ${devRejoinderPath}`);
}

if (devDebugExists && devRejoinderExists) {
  if (devRejoinderUnhoistedDebugExists) {
    logIfDebug(`path already exists: ${devRejoinderUnhoistedDebugPath}`);
  } else {
    await mkdir(dirname(devRejoinderUnhoistedDebugPath), {
      recursive: true
    });

    await cp(devDebugPath, devRejoinderUnhoistedDebugPath, {
      recursive: true,
      verbatimSymlinks: true,
      force: true
    });

    log(`installed un-hoisted dependency at: ${devRejoinderUnhoistedDebugPath}`);
  }
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
