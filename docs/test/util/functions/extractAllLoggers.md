[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [test/util](../README.md) / extractAllLoggers

# Function: extractAllLoggers()

> **extractAllLoggers**(`logger`): ([`ExtendedLogger`](../../../src/internal/interfaces/ExtendedLogger.md) \| [`ExtendedDebugger`](../../../src/interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]

Defined in: [test/util.ts:20](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/test/util.ts#L20)

Returns the logger that was passed in along with any of its properties that
are themselves loggers (like `::warn` and `::message`).

## Parameters

### logger

[`ExtendedLogger`](../../../src/internal/interfaces/ExtendedLogger.md) | [`ExtendedDebugger`](../../../src/interfaces/ExtendedDebugger.md)

## Returns

([`ExtendedLogger`](../../../src/internal/interfaces/ExtendedLogger.md) \| [`ExtendedDebugger`](../../../src/interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]
