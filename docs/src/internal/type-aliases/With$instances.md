[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / With$instances

# Type Alias: With$instances\<Wrapped\>

> **With$instances**\<`Wrapped`\> = `Wrapped` & `object`

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:92

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
