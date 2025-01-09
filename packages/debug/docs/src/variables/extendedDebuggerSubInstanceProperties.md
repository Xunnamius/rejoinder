[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / extendedDebuggerSubInstanceProperties

# Variable: extendedDebuggerSubInstanceProperties

> `const` **extendedDebuggerSubInstanceProperties**: \[`"message"`, `"error"`, `"warn"`\]

Defined in: [packages/debug/src/index.ts:137](https://github.com/Xunnamius/rejoinder/blob/ab7a0f32e566d9388c79571a96171daa50adfecf/packages/debug/src/index.ts#L137)

The single source of truth for the keys and types of the various convenience
sub-instances (e.g. "error", "warn", etc).

This array of property strings is guaranteed to be accurate thanks to
internal use of the `DebuggerSubInstanceTypeGuard` type (not publicly
exported).
