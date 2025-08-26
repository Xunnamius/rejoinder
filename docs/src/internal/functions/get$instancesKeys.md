[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / get$instancesKeys

# Function: get$instancesKeys()

> **get$instancesKeys**\<`T`\>(`logger`): keyof `T`\[*typeof* [`$instances`](../variables/$instances.md)\][]

Defined in: [src/internal.ts:455](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L455)

Returns all keys in an object's [$instances](../variables/$instances.md) property with proper
types.

## Type Parameters

### T

`T` *extends* `Pick`\<[`With$instances`](../type-aliases/With$instances.md)\<[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)\>, *typeof* [`$instances`](../variables/$instances.md)\>

## Parameters

### logger

`T`

## Returns

keyof `T`\[*typeof* [`$instances`](../variables/$instances.md)\][]
