[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / makeExtendedLogger

# Function: makeExtendedLogger()

> **makeExtendedLogger**(`extendedDebugger`, `type`, `underlyingDefaultLogFn`, `underlyingAlternateLogFn`): [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: [src/internal.ts:112](https://github.com/Xunnamius/rejoinder/blob/c7f17e27f307bf82c34a0a089f2eb7bd7288b876/src/internal.ts#L112)

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
