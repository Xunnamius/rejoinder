[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / makeExtendedLogger

# Function: makeExtendedLogger()

> **makeExtendedLogger**(`extendedDebugger`, `type`, `underlyingDefaultLogFn`, `underlyingAlternateLogFn`): [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: [src/internal.ts:111](https://github.com/Xunnamius/rejoinder/blob/ca03dc95b439565d6c2438e8d0f7697514c85819/src/internal.ts#L111)

Transforms an [ExtendedDebugger](../../interfaces/ExtendedDebugger.md) into an [ExtendedLogger](../interfaces/ExtendedLogger.md).

## Parameters

### extendedDebugger

[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

### type

[`GenericOutput`](../enumerations/LoggerType.md#genericoutput) | [`DebugOnly`](../enumerations/LoggerType.md#debugonly)

### underlyingDefaultLogFn

(...`args`) => `any`

This function will be called with various arguments of unknown type when
default (e.g. stdout) output should be sent to the user, such as when
`::newline(...)` is called.

### underlyingAlternateLogFn

(...`args`) => `any`

This function will be called with various arguments of unknown type when
alternate (e.g. stderr) output should be sent to the user, such as when
`::newline(..., 'alternate')` and `::error(...)`, `::warn(...)`,
`::message(...)`, etc are called.

## Returns

[`ExtendedLogger`](../interfaces/ExtendedLogger.md)
