[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / get$instancesKeys

# Function: get$instancesKeys()

> **get$instancesKeys**\<`T`\>(`logger`): keyof `T`\[*typeof* [`$instances`](../variables/$instances.md)\][]

Defined in: [src/internal.ts:418](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L418)

Returns all keys in an object's [$instances](../variables/$instances.md) property with proper
types.

## Type Parameters

• **T** *extends* `Pick`\<[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md), *typeof* [`$instances`](../variables/$instances.md)\>

## Parameters

### logger

`T`

## Returns

keyof `T`\[*typeof* [`$instances`](../variables/$instances.md)\][]
