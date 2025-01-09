[**rejoinder**](../../README.md)

***

[rejoinder](../../README.md) / [src](../README.md) / enableLoggingByTag

# Function: enableLoggingByTag()

> **enableLoggingByTag**(`__namedParameters`): `void`

Defined in: src/index.ts:462

Allows logs with the specified tags to resume being sent to output. Only relevant as the inverse function of [disableLoggingByTag](disableLoggingByTag.md).

## Parameters

### \_\_namedParameters

#### tags

`string`[]

The tags of messages that will resume being sent to output. If `tags` is
empty`, calling this function is effectively a noop.

## Returns

`void`
