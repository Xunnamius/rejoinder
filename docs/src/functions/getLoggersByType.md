[**rejoinder**](../../README.md)

***

[rejoinder](../../README.md) / [src](../README.md) / getLoggersByType

# Function: getLoggersByType()

> **getLoggersByType**(`__namedParameters`): ([`ExtendedLogger`](../interfaces/ExtendedLogger.md) \| [`ExtendedDebugger`](../interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]

Defined in: [src/index.ts:227](https://github.com/Xunnamius/rejoinder/blob/f565868f81df25d1011782666f1a2b9fb2361f02/src/index.ts#L227)

Return an array of all known loggers of a specific type: either `stdout`,
`debug`, or both (`all`). Pre-extended loggers (e.g. `::message`,
`::warn`, and `::error`) are excluded unless `includeInternal` is `true`.

## Parameters

### \_\_namedParameters

#### includeInternal

`boolean` = `true`

Whether to include unextendable/internal/pre-extended loggers like
`::message` and `::warn` in output.

**Default**

```ts
true
```

#### type

[`LoggerType`](../enumerations/LoggerType.md)

The type of loggers to return. Valid values are one of:

- `stdout` returns loggers created via `createGenericLogger`

- `debug` returns loggers created via `createDebugLogger`

- `all` returns all loggers

## Returns

([`ExtendedLogger`](../interfaces/ExtendedLogger.md) \| [`ExtendedDebugger`](../interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]
