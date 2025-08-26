[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / finalizeDebugger

# Function: finalizeDebugger()

> **finalizeDebugger**(`instance`): [`UnextendableInternalDebugger`](../interfaces/UnextendableInternalDebugger.md)

Defined in: [packages/debug/src/index.ts:299](https://github.com/Xunnamius/rejoinder/blob/209c7f2944f337141443b6e2663c00e5b47b6857/packages/debug/src/index.ts#L299)

Replace the `extend` method of an [InternalDebugger](../interfaces/InternalDebugger.md) instance with a
function that always throws.

## Parameters

### instance

[`InternalDebugger`](../interfaces/InternalDebugger.md)

## Returns

[`UnextendableInternalDebugger`](../interfaces/UnextendableInternalDebugger.md)
