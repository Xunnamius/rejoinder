/* eslint-disable unicorn/prevent-abbreviations */

/**
 ** This file is NOT managed by symbiote. It is run directly (via node) as part
 ** of the "prepare" and "release" npm scripts. The goal of this file is to
 ** use the version of rejoinder (and @-xun/debug) bundled with symbiote.
 */

// ! BEWARE that symbiote's release command executes with the NODE_OPTIONS
// ! environment variable set to:
// !   --require @-xun/symbiote/assets/conventional.config.cjs
// !
// ! This means running this file as part of symbiote's release command may
// ! still pull in various imports (such as rejoinder), which may not be
// ! desired. To avoid this issue in said context, make sure to invoke this file
// ! with NODE_OPTIONS unset.

// {@symbiote/notExtraneous rejoinder~dev}

import assert from 'node:assert';
import { access, rm, symlink } from 'node:fs/promises';

import { toDirname, toRelativePath } from '@-xun/fs';

const { createGenericLogger } = await import('rejoinder~dev').catch(
  () => import('rejoinder')
);

const rejoinderPath = './node_modules/rejoinder';
const devRejoinderPath = './node_modules/rejoinder~dev';
const symbioteBundledRejoinderPath =
  './node_modules/@-xun/symbiote/node_modules/rejoinder';

const rejoinderExists = await isAccessible(rejoinderPath);
const devRejoinderExists = await isAccessible(devRejoinderPath);
const symbioteBundledRejoinderExists = await isAccessible(symbioteBundledRejoinderPath);

assert(symbioteBundledRejoinderExists);

const log = createGenericLogger({ namespace: 'symbiote' }).extend('cycle-breaker');

// eslint-disable-next-line no-restricted-syntax
log('cwd: %O', process.cwd());

if (rejoinderExists) {
  const nodeModulesRelativeProjectRoot = toRelativePath(toDirname(rejoinderPath), '.');

  await rm(rejoinderPath, { maxRetries: 10, recursive: true });
  await symlink(nodeModulesRelativeProjectRoot, rejoinderPath, 'junction');

  log(
    'installed dependency symlink: %O => %O',
    rejoinderPath,
    nodeModulesRelativeProjectRoot
  );
} else {
  log('path does not exist: %O', rejoinderPath);
}

if (devRejoinderExists) {
  log('path already exists: %O', devRejoinderPath);
} else {
  const nodeModulesRelativeBundledRejoinder = toRelativePath(
    toDirname(rejoinderPath),
    symbioteBundledRejoinderPath
  );

  await symlink(nodeModulesRelativeBundledRejoinder, devRejoinderPath, 'junction');

  log(
    `installed dependency symlink: %O => %O`,
    devRejoinderPath,
    nodeModulesRelativeBundledRejoinder
  );
}

function isAccessible(path) {
  return access(path).then(
    () => true,
    () => false
  );
}
