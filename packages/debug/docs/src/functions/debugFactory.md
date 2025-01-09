[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / debugFactory

# Function: debugFactory()

An `ExtendedDebug` instance that returns an [ExtendedDebugger](../interfaces/ExtendedDebugger.md) instance
via [extendDebugger](extendDebugger.md).

## Call Signature

> **debugFactory**(...`args`): [`ExtendedDebugger`](../interfaces/ExtendedDebugger.md)

Defined in: [packages/debug/src/index.ts:218](https://github.com/Xunnamius/rejoinder/blob/ab7a0f32e566d9388c79571a96171daa50adfecf/packages/debug/src/index.ts#L218)

Send an optionally-formatted message to output.

### Parameters

#### args

...\[`string`\]

### Returns

[`ExtendedDebugger`](../interfaces/ExtendedDebugger.md)

## Call Signature

> **debugFactory**(...`args`): [`InternalDebugger`](../interfaces/InternalDebugger.md)

Defined in: [packages/debug/src/index.ts:218](https://github.com/Xunnamius/rejoinder/blob/ab7a0f32e566d9388c79571a96171daa50adfecf/packages/debug/src/index.ts#L218)

Create and return a new [InternalDebugger](../interfaces/InternalDebugger.md) instance.

### Parameters

#### args

...\[`string`\]

### Returns

[`InternalDebugger`](../interfaces/InternalDebugger.md)

## Call Signature

> **debugFactory**(`namespace`): `Debugger`

Defined in: [packages/debug/src/index.ts:218](https://github.com/Xunnamius/rejoinder/blob/ab7a0f32e566d9388c79571a96171daa50adfecf/packages/debug/src/index.ts#L218)

### Parameters

#### namespace

`string`

### Returns

`Debugger`
