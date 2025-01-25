[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / get$instancesKeys

# Function: get$instancesKeys()

> **get$instancesKeys**\<`T`\>(`logger`): keyof `T`\[*typeof* [`$instances`](../variables/$instances.md)\][]

Defined in: [src/internal.ts:424](https://github.com/Xunnamius/rejoinder/blob/f0345f969b3e8ccfc9a4dc96e3a670ff5e335f69/src/internal.ts#L424)

Returns all keys in an object's [$instances](../variables/$instances.md) property with proper
types.

## Type Parameters

• **T** *extends* `Pick`\<[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md), *typeof* [`$instances`](../variables/$instances.md)\>

## Parameters

### logger

`T`

## Returns

keyof `T`\[*typeof* [`$instances`](../variables/$instances.md)\][]
