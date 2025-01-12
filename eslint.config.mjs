// @ts-check

import {
  assertEnvironment,
  moduleExport
} from '@-xun/symbiote/assets/eslint.config.mjs';

import { createDebugLogger } from 'rejoinder';

const debug = createDebugLogger({ namespace: 'symbiote:config:eslint' });

const config = moduleExport({
  derivedAliases: getEslintAliases(),
  ...(await assertEnvironment())
});

config.push({
  /* Add custom config here, such as disabling certain rules */
});

export default config;

debug('exported config: %O', config);

function getEslintAliases() {
  // ! These aliases are auto-generated by symbiote. Instead of modifying them
  // ! directly, consider regenerating aliases across the entire project with:
  // ! `npx symbiote project renovate --regenerate-assets --assets-preset ...`
  return [
    ['multiverse+cli:*', './packages/cli/src/*'],
    ['multiverse+debug:*', './packages/debug/src/*'],
    ['multiverse+github:*', './packages/github/src/*'],
    ['multiverse+listr2:*', './packages/listr2/src/*'],
    ['multiverse+cli', './packages/cli/src/index.ts'],
    ['multiverse+debug', './packages/debug/src/index.ts'],
    ['multiverse+github', './packages/github/src/index.ts'],
    ['multiverse+listr2', './packages/listr2/src/index.ts'],
    ['rootverse+cli:*', './packages/cli/*'],
    ['rootverse+debug:*', './packages/debug/*'],
    ['rootverse+github:*', './packages/github/*'],
    ['rootverse+listr2:*', './packages/listr2/*'],
    ['rootverse:*', './*'],
    ['universe:*', './src/*'],
    ['universe', './src/index.ts'],
    ['testverse+cli:*', './packages/cli/test/*'],
    ['testverse+debug:*', './packages/debug/test/*'],
    ['testverse+github:*', './packages/github/test/*'],
    ['testverse+listr2:*', './packages/listr2/test/*'],
    ['testverse:*', './test/*'],
    ['typeverse:*', './types/*']
  ];
}
