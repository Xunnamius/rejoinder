[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / finalizeDebugger

# Function: finalizeDebugger()

> **finalizeDebugger**(`instance`): [`UnextendableInternalDebugger`](../interfaces/UnextendableInternalDebugger.md)

Defined in: [packages/debug/src/index.ts:382](https://github.com/Xunnamius/rejoinder/blob/6364d654a78668a6aba3808c40b450fcc2389353/packages/debug/src/index.ts#L382)

Replace the `extend` method of an [InternalDebugger](../interfaces/InternalDebugger.md) instance with a
function that always throws.

## Parameters

### instance

[`InternalDebugger`](../interfaces/InternalDebugger.md)

## Returns

[`UnextendableInternalDebugger`](../interfaces/UnextendableInternalDebugger.md)
