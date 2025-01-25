[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / metadata

# Variable: metadata

> `const` **metadata**: `object`

Defined in: [src/internal.ts:93](https://github.com/Xunnamius/rejoinder/blob/9296149d58253119677e1f99010c807c5028c30d/src/internal.ts#L93)

Keeps track of our various "logger" (i.e. debug) instances and their
associated metadata. Also keeps track of those tags for which we disable
output.

## Type declaration

### debugger

> **debugger**: ([`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]

### denylist

> **denylist**: `Set`\<`string`\>

### logger

> **logger**: ([`ExtendedLogger`](../interfaces/ExtendedLogger.md) \| [`UnextendableInternalLogger`](../interfaces/UnextendableInternalLogger.md))[]
