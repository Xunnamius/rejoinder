[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / With$instances

# Type Alias: With$instances\<Wrapped\>

> **With$instances**\<`Wrapped`\> = `Wrapped` & `object`

Defined in: [packages/debug/src/index.ts:113](https://github.com/Xunnamius/rejoinder/blob/f64c1e0c19bc97c588be2ae8d7b20734d4ed6719/packages/debug/src/index.ts#L113)

Exposes "secret" [$instances](../variables/$instances.md) access.

## Type declaration

### \[$instances\]

> **\[$instances\]**: `DebuggerSubInstanceTypeGuard`\<`Merge`\<`_DebuggerSubInstances`, \{ `$log`: `Wrapped`; \}\>\>

An array of sub-instances (e.g. "error", "warn", etc), including the root
instance.

## Type Parameters

### Wrapped

`Wrapped`

## See

DebuggerSubInstanceTypeGuard
