import { dirname } from 'node:path';

import { runProgram } from '@black-flag/core';

module.exports = runProgram(dirname(require.resolve('./commands')));
