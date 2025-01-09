[**rejoinder**](../../README.md)

***

[rejoinder](../../README.md) / [src](../README.md) / createListrTaskLogger

# Function: createListrTaskLogger()

> **createListrTaskLogger**(`__namedParameters`): [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: src/index.ts:229

Create and return a new set of logger instances configured to output via a
Listr2 task.

## Parameters

### \_\_namedParameters

#### namespace

`string`

The namespace of the logger. The namespace must be a valid [`debug`
namespace](https://npm.im/debug#namespace-colors).

**See**

https://npm.im/debug#namespace-colors

#### task

`GenericListrTask`

The task to which logging output will be sent.

## Returns

[`ExtendedLogger`](../interfaces/ExtendedLogger.md)
