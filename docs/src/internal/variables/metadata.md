[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / metadata

# Variable: metadata

> `const` **metadata**: `object`

Defined in: [src/internal.ts:116](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L116)

Keeps track of our various "logger" (i.e. debug) instances and their
associated metadata. Also keeps track of those tags for which we disable
output.

## Type Declaration

### debugger

> **debugger**: ([`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md) \| `UnextendableInternalDebugger`)[]

### denylist

> **denylist**: `Set`\<`string`\>

### logger

> **logger**: ([`ExtendedLogger`](../interfaces/ExtendedLogger.md) \| [`UnextendableInternalLogger`](../interfaces/UnextendableInternalLogger.md))[]
