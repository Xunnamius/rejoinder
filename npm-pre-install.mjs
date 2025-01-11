/* eslint-disable no-console */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/use-unknown-in-catch-callback-variable */
// @ts-check

/**
 ** This file is not managed by symbiote. It is run directly as part of the npm
 ** "prepare" lifecycle. The goal of this file is to copy the contents of
 ** `@-xun/debug~dev` to `@-xun/debug`, overwriting the symlink created by NPM
 ** which by default points to the packages/debug package internal to this
 ** monorepo.
 **
 ** We need to do this because of the circular dependency between symbiote and
 ** rejoinder. Rejoinder needs symbiote to bootstrap its dev environment.
 ** Symbiote needs rejoinder to talk to the user, and imports it immediately
 ** upon invocation. That means rejoinder needs to be built by symbiote before
 ** it can be used... but symbiote needs it to be built already before symbiote
 ** can build it.
 **
 ** This script breaks the cycle.
 */

import { lstat, rename, rm } from 'node:fs/promises';

const prefix = '  symbiote::npm-pre-install: ';
const nodeModulesXunDebugPackagePath = './node_modules/@-xun/debug';
const nodeModulesXunDebugDevPackagePath = './node_modules/@-xun/debug~dev';

const debugPackagePathIsSymbolicLink = await lstat(nodeModulesXunDebugPackagePath).then(
  (stat) => stat.isSymbolicLink(),
  (error) => {
    if (process.env.DEBUG) {
      console.log(
        'no pre-install action taken because stat of %O failed: %O',
        nodeModulesXunDebugPackagePath,
        error
      );
    }
  }
);

if (debugPackagePathIsSymbolicLink) {
  await rm(nodeModulesXunDebugPackagePath);
  await rename(nodeModulesXunDebugDevPackagePath, nodeModulesXunDebugPackagePath);
  console.log(
    `${prefix}overwrote @-xun/debug workspace symlink with real package contents`
  );
} else {
  if (process.env.DEBUG) {
    console.log(
      `${prefix}no pre-install action taken because %O is not a symlink`,
      nodeModulesXunDebugPackagePath
    );
  }
}
