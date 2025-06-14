[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / $instances

# Variable: $instances

> `const` **$instances**: *typeof* `$instances`

Defined in: [packages/debug/src/index.ts:22](https://github.com/Xunnamius/rejoinder/blob/f64c1e0c19bc97c588be2ae8d7b20734d4ed6719/packages/debug/src/index.ts#L22)

Represents a property on a "root" [ExtendedDebugger](../interfaces/ExtendedDebugger.md) instance that
returns an array of its [UnextendableInternalDebugger](../interfaces/UnextendableInternalDebugger.md) sub-instances
(e.g. "error", "warn", etc). The array will also include the root
[ExtendedDebugger](../interfaces/ExtendedDebugger.md) instance.
