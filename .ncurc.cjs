// @ts-check
'use strict';

const { createDebugLogger } = require('rejoinder~dev');

const debug = createDebugLogger({ namespace: 'symbiote:config:ncurc' });

// * https://www.npmjs.com/package/npm-check-updates#configuration-files
module.exports = {
  install: 'never',
  reject: [
    // ? Reject any super-pinned dependencies (e.g. find-up~5 and execa~7)
    '*~*',
    // ? Pin the CJS version unless and until debug supports an ESM version
    'supports-color'
  ]
};

debug('exported config: %O', module.exports);
