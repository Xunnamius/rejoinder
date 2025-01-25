[**rejoinder**](../../README.md)

***

[rejoinder](../../README.md) / [src](../README.md) / disableLoggers

# Function: disableLoggers()

> **disableLoggers**(`__namedParameters`): `void`

Defined in: [src/index.ts:140](https://github.com/Xunnamius/rejoinder/blob/f0345f969b3e8ccfc9a4dc96e3a670ff5e335f69/src/index.ts#L140)

Disable all logger instances (coarse-grain).

## Parameters

### \_\_namedParameters

#### filter

`string` \| `RegExp`

Optionally filter the loggers to be disabled. If `filter` is a string, only
loggers with namespaces equal to `filter` will be disabled. If `filter` is
a regular expression, only loggers with namespaces matching the expression
will be disabled.

#### type

[`LoggerType`](../internal/enumerations/LoggerType.md)

The type of logging to disable. Valid values are one of:

- `stdout` disables loggers created via `createGenericLogger`

- `debug` disables loggers created via `createDebugLogger`

- `all` disables all loggers

## Returns

`void`
