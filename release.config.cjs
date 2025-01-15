// @ts-check
'use strict';

const { deepMergeConfig } = require('@-xun/symbiote/assets');

const {
  assertEnvironment,
  moduleExport
} = require('@-xun/symbiote/assets/release.config.cjs');

const { createDebugLogger } = require('rejoinder');

const debug = createDebugLogger({ namespace: 'symbiote:config:release' });

module.exports = deepMergeConfig(
  moduleExport(assertEnvironment({ projectRoot: __dirname })),
  {
    // Any custom configs here will be deep merged with moduleExport's result
    plugins: [
      [
        '@semantic-release/exec',
        {
          // ? Need to re-apply our fixes after xrelease un-applies them
          prepareCmd: `node ${__dirname}/cycle-breaker.mjs`
        }
      ]
    ]
  }
);

debug('exported config: %O', module.exports);
