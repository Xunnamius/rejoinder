import { packageUp } from 'package-up';
import { createDebugLogger } from 'rejoinder';
import { createGithubLogger } from 'rejoinder-github-actions';

import type { ExtendedDebugger, UnextendableInternalDebugger } from '@-xun/debug';
import type { RootConfiguration } from '@black-flag/core';

export default async function command(): Promise<
  RootConfiguration<{
    use: 'log' | 'message' | 'warn' | 'error' | 'debug';
    namespace: string;
  }>
> {
  const name = getNameFromPackageJson(await packageUp());

  return {
    builder(bf) {
      bf.strict(false);

      bf.example(`$0 hello world!`, '');
      bf.example(`$0 'hello world!'`, '');
      bf.example(`$0 --namespace echo:: 'hello world!'`, '');
      bf.example(`$0 rejoin --name output --use warn Warning! Warning! Warning!`, '');
      bf.example(`DEBUG='out' $0 --use debug --namespace debug-output HELLO WORLD!`, '');
      bf.example(`$0 title=Output For Project X::Real output here!`, '');

      return {
        use: {
          choices: ['log', 'message', 'warn', 'error', 'debug'],
          default: 'log',
          description: 'which logger is used to generate output'
        },
        namespace: {
          alias: 'name',
          string: true,
          description: 'the namespace used when generating output',
          default: name || '>>',
          defaultDescription: `"name" property from nearest package.json file${name ? ` (currently: ${name})` : ''}`
        }
      };
    },

    handler({ _: output, use: outputMethod, namespace }) {
      const createLogger =
        outputMethod === 'debug' ? createDebugLogger : createGithubLogger;

      let logger: ExtendedDebugger | UnextendableInternalDebugger = createLogger({
        namespace
      });

      switch (outputMethod) {
        case 'message': {
          logger = logger.message;
          break;
        }

        case 'warn': {
          logger = logger.warn;
          break;
        }

        case 'error': {
          logger = logger.error;
          break;
        }
      }

      logger(output);
    }
  };

  function getNameFromPackageJson(packageJsonPath: string | undefined) {
    if (!packageJsonPath) {
      return undefined;
    }

    try {
      const { name } = require(packageJsonPath);
      return name as string;
    } catch {
      return undefined;
    }
  }
}
