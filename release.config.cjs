// @ts-check
'use strict';

const os = require('node:os');
const assert = require('node:assert');

const {
  assertEnvironment,
  moduleExport
} = require('@-xun/symbiote/assets/release.config.cjs');

const { createDebugLogger } = require('rejoinder~dev');

assert(
  os.platform() !== 'win32',
  "this project's release process is not runnable on Windows"
);

const debug = createDebugLogger({ namespace: 'symbiote:config:release' });
const config = moduleExport(assertEnvironment({ projectRoot: __dirname }));

const npmPluginIndex = config.plugins?.findIndex(
  (plugin) => plugin === '@semantic-release/npm' || plugin[0] === '@semantic-release/npm'
);

assert(typeof npmPluginIndex === 'number');
assert(config.plugins);

config.plugins.splice(npmPluginIndex + 1, 0, [
  '@semantic-release/exec',
  {
    // ? Need to re-apply our fixes after xrelease un-applies them
    // ! BEWARE that symbiote's release command executes with the NODE_OPTIONS
    // ! environment variable set to:
    // !   --require @-xun/symbiote/assets/conventional.config.cjs
    // !
    // ! This means running this file as part of symbiote's release command may
    // ! still pull in various imports (such as rejoinder), which may not be
    // ! desired and could cause crazy errors. To avoid this issue, make sure to
    // ! always invoke this file with NODE_OPTIONS unset.
    prepareCmd: `NODE_OPTIONS= node ${__dirname}/cycle-breaker.mjs`
  }
]);

module.exports = config;

debug('exported config: %O', module.exports);
