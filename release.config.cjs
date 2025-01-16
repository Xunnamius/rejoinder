// @ts-check
'use strict';

const assert = require('node:assert');

const {
  assertEnvironment,
  moduleExport
} = require('@-xun/symbiote/assets/release.config.cjs');

const { createDebugLogger } = require('rejoinder~dev');

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
    prepareCmd: `node ${__dirname}/cycle-breaker.mjs`
  }
]);

module.exports = config;

debug('exported config: %O', module.exports);
