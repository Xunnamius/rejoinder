[**rejoinder**](../../README.md)

***

[rejoinder](../../README.md) / [src](../README.md) / getLoggersByType

# Function: getLoggersByType()

> **getLoggersByType**(`__namedParameters`): ([`ExtendedLogger`](../internal/interfaces/ExtendedLogger.md) \| [`ExtendedDebugger`](../interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]

Defined in: [src/index.ts:99](https://github.com/Xunnamius/rejoinder/blob/ca03dc95b439565d6c2438e8d0f7697514c85819/src/index.ts#L99)

Return an array of all known loggers of a specific type: either `stdout`,
`debug`, or both (`all`). Pre-extended loggers (e.g. `::message`,
`::warn`, and `::error`) are excluded unless `includeInternal` is `true`.

## Parameters

### \_\_namedParameters

#### includeInternal?

`boolean` = `true`

Whether to include unextendable/internal/pre-extended loggers like
`::message` and `::warn` in output.

**Default**

```ts
true
```

#### type

[`LoggerType`](../internal/enumerations/LoggerType.md)

The type of loggers to return. Valid values are one of:

- `stdout` returns loggers created via `createGenericLogger`

- `debug` returns loggers created via `createDebugLogger`

- `all` returns all loggers

## Returns

([`ExtendedLogger`](../internal/interfaces/ExtendedLogger.md) \| [`ExtendedDebugger`](../interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]
