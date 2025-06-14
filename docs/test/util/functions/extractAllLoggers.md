[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [test/util](../README.md) / extractAllLoggers

# Function: extractAllLoggers()

> **extractAllLoggers**(`logger`): ([`ExtendedDebugger`](../../../src/interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]

Defined in: [test/util.ts:19](https://github.com/Xunnamius/rejoinder/blob/2e193401f811190578a6daed325a2ddce540538d/test/util.ts#L19)

Returns the logger that was passed in along with any of its properties that
are themselves loggers (like `::warn` and `::message`).

## Parameters

### logger

[`ExtendedLogger`](../../../src/internal/interfaces/ExtendedLogger.md) | [`ExtendedDebugger`](../../../src/interfaces/ExtendedDebugger.md)

## Returns

([`ExtendedDebugger`](../../../src/interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]
