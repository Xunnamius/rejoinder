[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [test/util](../README.md) / extractAllLoggers

# Function: extractAllLoggers()

> **extractAllLoggers**(`logger`): ([`ExtendedDebugger`](../../../src/interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]

Defined in: [test/util.ts:20](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/test/util.ts#L20)

Returns the logger that was passed in along with any of its properties that
are themselves loggers (like `::warn` and `::message`).

## Parameters

### logger

[`ExtendedLogger`](../../../src/internal/interfaces/ExtendedLogger.md) | [`ExtendedDebugger`](../../../src/interfaces/ExtendedDebugger.md)

## Returns

([`ExtendedDebugger`](../../../src/interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]
