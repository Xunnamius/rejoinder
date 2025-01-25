[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / debugFactory

# Function: debugFactory()

An `ExtendedDebug` instance that returns an [ExtendedDebugger](../interfaces/ExtendedDebugger.md) instance
via [extendDebugger](extendDebugger.md).

## Call Signature

> **debugFactory**(...`args`): [`ExtendedDebugger`](../interfaces/ExtendedDebugger.md)

Defined in: [packages/debug/src/index.ts:225](https://github.com/Xunnamius/rejoinder/blob/3408de1428d053296c3b4a0594d1b1a937d57757/packages/debug/src/index.ts#L225)

Send an optionally-formatted message to output.

### Parameters

#### args

...\[`string`\]

### Returns

[`ExtendedDebugger`](../interfaces/ExtendedDebugger.md)

## Call Signature

> **debugFactory**(...`args`): [`InternalDebugger`](../interfaces/InternalDebugger.md)

Defined in: [packages/debug/src/index.ts:225](https://github.com/Xunnamius/rejoinder/blob/3408de1428d053296c3b4a0594d1b1a937d57757/packages/debug/src/index.ts#L225)

Create and return a new [InternalDebugger](../interfaces/InternalDebugger.md) instance.

### Parameters

#### args

...\[`string`\]

### Returns

[`InternalDebugger`](../interfaces/InternalDebugger.md)

## Call Signature

> **debugFactory**(`namespace`): `Debugger`

Defined in: [packages/debug/src/index.ts:225](https://github.com/Xunnamius/rejoinder/blob/3408de1428d053296c3b4a0594d1b1a937d57757/packages/debug/src/index.ts#L225)

### Parameters

#### namespace

`string`

### Returns

`Debugger`
