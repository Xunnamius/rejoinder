[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / get$instancesKeys

# Function: get$instancesKeys()

> **get$instancesKeys**\<`T`\>(`logger`): keyof `T`\[*typeof* [`$instances`](../variables/$instances.md)\][]

Defined in: [src/internal.ts:401](https://github.com/Xunnamius/rejoinder/blob/2861b5f2270204243d000318b047b574732b219c/src/internal.ts#L401)

Returns all keys in an object's [$instances](../variables/$instances.md) property with proper
types.

## Type Parameters

• **T** *extends* `Pick`\<[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md), *typeof* [`$instances`](../variables/$instances.md)\>

## Parameters

### logger

`T`

## Returns

keyof `T`\[*typeof* [`$instances`](../variables/$instances.md)\][]
