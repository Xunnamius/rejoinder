[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / makeExtendedLogger

# Function: makeExtendedLogger()

> **makeExtendedLogger**(`extendedDebugger`, `type`, `underlyingDefaultLogFn`, `underlyingAlternateLogFn`): [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: [src/internal.ts:110](https://github.com/Xunnamius/rejoinder/blob/2e193401f811190578a6daed325a2ddce540538d/src/internal.ts#L110)

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
