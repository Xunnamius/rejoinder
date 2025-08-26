[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / With$instances

# Type Alias: With$instances\<Wrapped\>

> **With$instances**\<`Wrapped`\> = `Wrapped` & `object`

Defined in: [packages/debug/src/index.ts:113](https://github.com/Xunnamius/rejoinder/blob/209c7f2944f337141443b6e2663c00e5b47b6857/packages/debug/src/index.ts#L113)

Exposes "secret" [$instances](../variables/$instances.md) access.

## Type Declaration

### \[$instances\]

> **\[$instances\]**: `DebuggerSubInstanceTypeGuard`\<`Merge`\<`_DebuggerSubInstances`, \{ `$log`: `Wrapped`; \}\>\>

An array of sub-instances (e.g. "error", "warn", etc), including the root
instance.

## Type Parameters

### Wrapped

`Wrapped`

## See

DebuggerSubInstanceTypeGuard
