[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / finalizeDebugger

# Function: finalizeDebugger()

> **finalizeDebugger**(`instance`): [`UnextendableInternalDebugger`](../interfaces/UnextendableInternalDebugger.md)

Defined in: [packages/debug/src/index.ts:353](https://github.com/Xunnamius/rejoinder/blob/ab7a0f32e566d9388c79571a96171daa50adfecf/packages/debug/src/index.ts#L353)

Replace the `extend` method of an [InternalDebugger](../interfaces/InternalDebugger.md) instance with a
function that always throws.

## Parameters

### instance

[`InternalDebugger`](../interfaces/InternalDebugger.md)

## Returns

[`UnextendableInternalDebugger`](../interfaces/UnextendableInternalDebugger.md)
