// @ts-check
'use strict';

import { deepMergeConfig } from '@-xun/symbiote/assets';
import { assertEnvironment, moduleExport } from '@-xun/symbiote/assets/jest.config.mjs';

// TODO: publish latest rejoinder package first, then update configs to use it
//import { createDebugLogger } from 'rejoinder';

/*const debug = createDebugLogger({ namespace: 'symbiote:config:jest' });*/

const config = deepMergeConfig(
  moduleExport({ derivedAliases: getJestAliases(), ...assertEnvironment() }),
  {
    // Any custom configs here will be deep merged with moduleExport's result
  }
);

export default config;

/*debug('exported config: %O', config);*/

function getJestAliases() {
  // ! These aliases are auto-generated by symbiote. Instead of modifying them
  // ! directly, consider regenerating aliases across the entire project with:
  // ! `npx symbiote project renovate --regenerate-assets --assets-preset ...`
  return {
    '^rootverse\\+cli:(.+)$': '<rootDir>/packages/cli/$1',
    '^rootverse\\+debug:(.+)$': '<rootDir>/packages/debug/$1',
    '^rootverse:(.+)$': '<rootDir>/$1',
    '^universe:(.+)$': '<rootDir>/src/$1',
    '^universe$': '<rootDir>/src/index.ts',
    '^testverse\\+cli:(.+)$': '<rootDir>/packages/cli/test/$1',
    '^testverse\\+debug:(.+)$': '<rootDir>/packages/debug/test/$1',
    '^testverse:(.+)$': '<rootDir>/test/$1',
    '^typeverse:(.+)$': '<rootDir>/types/$1'
  };
}
