/**
 ** Enable all rejoinder debug loggers (as if DEBUG='...' were provided) as a
 ** side-effect of importing this file if ACTIONS_RUNNER_DEBUG or
 ** ACTIONS_STEP_DEBUG are present in process.env with a "true" value.
 */

import { enableLoggers, LoggerType } from 'rejoinder';

if (
  process.env.ACTIONS_RUNNER_DEBUG === 'true' ||
  process.env.ACTIONS_STEP_DEBUG === 'true'
) {
  enableLoggers({ type: LoggerType.DebugOnly });
}
