[**rejoinder**](../../README.md)

***

[rejoinder](../../README.md) / [src](../README.md) / enableLoggers

# Function: enableLoggers()

> **enableLoggers**(`__namedParameters`): `void`

Defined in: [src/index.ts:177](https://github.com/Xunnamius/rejoinder/blob/9296149d58253119677e1f99010c807c5028c30d/src/index.ts#L177)

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
