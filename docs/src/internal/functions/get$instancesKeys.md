[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / get$instancesKeys

# Function: get$instancesKeys()

> **get$instancesKeys**\<`T`\>(`logger`): keyof `T`\[*typeof* [`$instances`](../variables/$instances.md)\][]

Defined in: [src/internal.ts:431](https://github.com/Xunnamius/rejoinder/blob/4c31d61cc2d97962fe915faa47504a4378c59057/src/internal.ts#L431)

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
