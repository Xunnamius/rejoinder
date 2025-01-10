[**rejoinder-listr2**](../README.md)

***

[rejoinder-listr2](../README.md) / createListrTaskLogger

# Function: createListrTaskLogger()

> **createListrTaskLogger**(`__namedParameters`): `ExtendedLogger`

Defined in: [index.ts:44](https://github.com/Xunnamius/rejoinder/blob/78424fa8f7badb679969f17dc434d2444f557d0d/packages/listr2/src/index.ts#L44)

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

`ExtendedLogger`
