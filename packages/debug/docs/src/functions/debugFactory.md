[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / debugFactory

# Function: debugFactory()

An `ExtendedDebug` instance that returns an [ExtendedDebugger](../interfaces/ExtendedDebugger.md) instance
via [extendDebugger](extendDebugger.md).

## Call Signature

> **debugFactory**(...`args`): [`ExtendedDebugger`](../interfaces/ExtendedDebugger.md)

Defined in: [packages/debug/src/index.ts:220](https://github.com/Xunnamius/rejoinder/blob/11cd3e0539affb5099730b882c9b7bade1c1b092/packages/debug/src/index.ts#L220)

Send an optionally-formatted message to output.

### Parameters

#### args

...\[`string`\]

### Returns

[`ExtendedDebugger`](../interfaces/ExtendedDebugger.md)

## Call Signature

> **debugFactory**(...`args`): [`InternalDebugger`](../interfaces/InternalDebugger.md)

Defined in: [packages/debug/src/index.ts:220](https://github.com/Xunnamius/rejoinder/blob/11cd3e0539affb5099730b882c9b7bade1c1b092/packages/debug/src/index.ts#L220)

Create and return a new [InternalDebugger](../interfaces/InternalDebugger.md) instance.

### Parameters

#### args

...\[`string`\]

### Returns

[`InternalDebugger`](../interfaces/InternalDebugger.md)

## Call Signature

> **debugFactory**(`namespace`): `Debugger`

Defined in: [packages/debug/src/index.ts:220](https://github.com/Xunnamius/rejoinder/blob/11cd3e0539affb5099730b882c9b7bade1c1b092/packages/debug/src/index.ts#L220)

### Parameters

#### namespace

`string`

### Returns

`Debugger`
