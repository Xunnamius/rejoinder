[**rejoinder-listr2**](../README.md)

***

[rejoinder-listr2](../README.md) / createListrTaskLogger

# Function: createListrTaskLogger()

> **createListrTaskLogger**(`__namedParameters`): `ExtendedLogger`

Defined in: [packages/listr2/src/index.ts:51](https://github.com/Xunnamius/rejoinder/blob/8bad0977e8c8ead29ff2da293d34c9aab8060d89/packages/listr2/src/index.ts#L51)

Create and return a new set of logger instances configured to output via a
Listr2 task.

Note that the `::newline` method of these logger instances is a no-op.

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
