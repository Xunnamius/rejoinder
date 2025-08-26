//{@symbiote/notInvalid debug} // ? This package is coming from rejoinder
import legacyDebug from 'debug';
import { packageUp } from 'package-up';
import { createDebugLogger, createGenericLogger, SINGLE_SPACE } from 'rejoinder';
import { createGithubLogger } from 'rejoinder-github-actions';

import type { ExtendedDebugger, UnextendableInternalDebugger } from '@-xun/debug';
import type { RootConfiguration } from '@black-flag/core';

// ? Remove the timestamp at the end of rejoinder's output
const oldFormatArgs = legacyDebug.formatArgs;
legacyDebug.formatArgs = function (this: legacyDebug.Debugger, args: unknown[]) {
  Reflect.apply(oldFormatArgs, this, [args]);

  if (args.at(-1) && String(args.at(-1)).startsWith('\u001B[3')) {
    args.pop();
  }
};

export default async function command(): Promise<
  RootConfiguration<{
    use: 'log' | 'message' | 'warn' | 'error' | 'debug';
    namespace: string;
  }>
> {
  const name = getNameFromPackageJson(await packageUp());

  return {
    usage: `Usage: $000 [strings...]\n${SINGLE_SPACE}      rejoin [strings...]\n\n$1.`,
    description:
      'Output one or more strings using rejoinder (similar in functionality to the "echo" Linux utility)',
    builder(bf) {
      bf.strict(false);

      bf.example(`rejoin hello world!`, '');
      bf.example(`rejoin 'hello world!'`, '');
      bf.example(`rejoin --namespace echo:: 'hello world!'`, '');

      bf.example(
        `rejoin rejoin --name output --use warn Warning! Warning! Warning!`,
        ''
      );

      bf.example(
        `DEBUG='out' rejoin --use debug --namespace debug-output HELLO WORLD!`,
        ''
      );

      bf.example(
        `rejoin title=Output For Project X::Real output here!`,
        '(for CI environments)'
      );

      return {
        use: {
          choices: ['log', 'message', 'warn', 'error', 'debug'],
          default: 'log',
          description: 'Select which logger is used to generate output'
        },
        namespace: {
          alias: 'name',
          string: true,
          description: 'Specify the namespace used when generating output',
          default: name,
          defaultDescription: `"name" property from nearest package.json file${name ? ` (currently: ${name})` : ''}`
        }
      };
    },

    handler({ _: output, use: outputMethod, namespace }) {
      const createLogger =
        outputMethod === 'debug'
          ? createDebugLogger
          : !['false', '0', 'off', 'no', undefined].includes(process.env.CI)
            ? createGithubLogger
            : createGenericLogger;

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

      Reflect.apply(logger, undefined, output);
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
