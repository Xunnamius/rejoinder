[**rejoinder**](../../README.md)

***

[rejoinder](../../README.md) / [src](../README.md) / enableLoggers

# Function: enableLoggers()

> **enableLoggers**(`__namedParameters`): `void`

Defined in: [src/index.ts:176](https://github.com/Xunnamius/rejoinder/blob/8a503ebeed2689d0efaa12692a8cdaf933b5902d/src/index.ts#L176)

Enable all logger instances (coarse-grain).

## Parameters

### \_\_namedParameters

#### filter

`string` \| `RegExp`

Optionally filter the loggers to be enabled. If `filter` is a string, only
loggers with namespaces equal to `filter` will be enabled. If `filter` is a
regular expression, only loggers with namespaces matching the expression
will be enabled.

#### type

[`LoggerType`](../internal/enumerations/LoggerType.md)

The type of logging to enable. Valid values are one of:

- `stdout` enables loggers created via `createGenericLogger`

- `debug` enables loggers created via `createDebugLogger`

- `all` enables all loggers

## Returns

`void`
