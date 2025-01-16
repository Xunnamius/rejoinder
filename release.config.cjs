// @ts-check
'use strict';

const {
  assertEnvironment,
  moduleExport
} = require('@-xun/symbiote/assets/release.config.cjs');

const { createDebugLogger } = require('rejoinder');

const debug = createDebugLogger({ namespace: 'symbiote:config:release' });
const config = moduleExport(assertEnvironment({ projectRoot: __dirname }));

config.plugins?.push([
  '@semantic-release/exec',
  {
    // ? Need to re-apply our fixes after xrelease un-applies them
    prepareCmd: `node ${__dirname}/cycle-breaker.mjs`
  }
]);

module.exports = config;

debug('exported config: %O', module.exports);
