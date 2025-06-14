[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / finalizeDebugger

# Function: finalizeDebugger()

> **finalizeDebugger**(`instance`): [`UnextendableInternalDebugger`](../interfaces/UnextendableInternalDebugger.md)

Defined in: [packages/debug/src/index.ts:293](https://github.com/Xunnamius/rejoinder/blob/dd2fd7448223b17b0b7fad4f16950e431fddfc71/packages/debug/src/index.ts#L293)

Replace the `extend` method of an [InternalDebugger](../interfaces/InternalDebugger.md) instance with a
function that always throws.

## Parameters

### instance

[`InternalDebugger`](../interfaces/InternalDebugger.md)

## Returns

[`UnextendableInternalDebugger`](../interfaces/UnextendableInternalDebugger.md)
