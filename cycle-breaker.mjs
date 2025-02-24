/* eslint-disable unicorn/prevent-abbreviations */

/**
 ** This file is NOT managed by symbiote. It is run directly (via node) as part
 ** of the "prepare" and "release" npm scripts. The goal of this file is to
 ** create a pseudo-package (rejoinder~dev) so we can rely on the versions of
 ** rejoinder and @-xun/debug bundled with symbiote.
 */

// {@symbiote/notExtraneous rejoinder~dev}

import assert from 'node:assert';
import { access, symlink } from 'node:fs/promises';

import { toAbsolutePath, toPath, toRelativePath } from '@-xun/fs';

const { createGenericLogger } = await import('rejoinder~dev').catch(
  () => import('rejoinder')
);

const thisDir = toAbsolutePath(import.meta.dirname);
const devRejoinderPath = toPath(thisDir, 'node_modules/rejoinder~dev');

const symbioteBundledRejoinderPath = toPath(
  thisDir,
  'node_modules/@-xun/symbiote/node_modules/rejoinder'
);

const devRejoinderExists = await isAccessible(devRejoinderPath);
const symbioteBundledRejoinderExists = await isAccessible(symbioteBundledRejoinderPath);

assert(symbioteBundledRejoinderExists);

const log = createGenericLogger({ namespace: 'symbiote' }).extend('cycle-breaker');
const relativeDevRejoinderPath = toRelativePath(thisDir, devRejoinderPath);

// eslint-disable-next-line no-restricted-syntax
log('cwd: %O', process.cwd());

if (devRejoinderExists) {
  log('path already exists: %O', relativeDevRejoinderPath);
} else {
  await symlink(symbioteBundledRejoinderPath, devRejoinderPath, 'junction');

  log(
    `installed dependency symlink: %O => %O`,
    relativeDevRejoinderPath,
    toRelativePath(thisDir, symbioteBundledRejoinderPath)
  );
}

function isAccessible(path) {
  return access(path).then(
    () => true,
    () => false
  );
}
