[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / get$instancesKeys

# Function: get$instancesKeys()

> **get$instancesKeys**\<`T`\>(`logger`): keyof `T`\[*typeof* [`$instances`](../variables/$instances.md)\][]

Defined in: [src/internal.ts:423](https://github.com/Xunnamius/rejoinder/blob/2e193401f811190578a6daed325a2ddce540538d/src/internal.ts#L423)

Returns all keys in an object's [$instances](../variables/$instances.md) property with proper
types.

## Type Parameters

### T

`T` *extends* `Pick`\<[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md), *typeof* [`$instances`](../variables/$instances.md)\>

## Parameters

### logger

`T`

## Returns

keyof `T`\[*typeof* [`$instances`](../variables/$instances.md)\][]
