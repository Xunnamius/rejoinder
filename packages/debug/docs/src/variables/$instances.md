[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / $instances

# Variable: $instances

> `const` **$instances**: *typeof* [`$instances`]($instances.md)

Defined in: [packages/debug/src/index.ts:23](https://github.com/Xunnamius/rejoinder/blob/6364d654a78668a6aba3808c40b450fcc2389353/packages/debug/src/index.ts#L23)

Represents a property on a "root" [ExtendedDebugger](../interfaces/ExtendedDebugger.md) instance that
returns an array of its [UnextendableInternalDebugger](../interfaces/UnextendableInternalDebugger.md) sub-instances
(e.g. "error", "warn", etc). The array will also include the root
[ExtendedDebugger](../interfaces/ExtendedDebugger.md) instance.
