[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / $instances

# Variable: $instances

> `const` **$instances**: unique `symbol`

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:10

Represents a property on a "root" [ExtendedDebugger](../../interfaces/ExtendedDebugger.md) instance that
returns an array of its UnextendableInternalDebugger sub-instances
(e.g. "error", "warn", etc). The array will also include the root
[ExtendedDebugger](../../interfaces/ExtendedDebugger.md) instance.
