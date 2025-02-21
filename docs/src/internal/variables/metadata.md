[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / metadata

# Variable: metadata

> `const` **metadata**: `object`

Defined in: [src/internal.ts:91](https://github.com/Xunnamius/rejoinder/blob/ca03dc95b439565d6c2438e8d0f7697514c85819/src/internal.ts#L91)

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
