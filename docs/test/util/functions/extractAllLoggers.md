[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [test/util](../README.md) / extractAllLoggers

# Function: extractAllLoggers()

> **extractAllLoggers**(`logger`): ([`ExtendedDebugger`](../../../src/interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]

Defined in: [test/util.ts:20](https://github.com/Xunnamius/rejoinder/blob/8fff50d663840973b506f42d097ba932988f893a/test/util.ts#L20)

Returns the logger that was passed in along with any of its properties that
are themselves loggers (like `::warn` and `::message`).

## Parameters

### logger

[`ExtendedLogger`](../../../src/internal/interfaces/ExtendedLogger.md) | [`ExtendedDebugger`](../../../src/interfaces/ExtendedDebugger.md)

## Returns

([`ExtendedDebugger`](../../../src/interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]
