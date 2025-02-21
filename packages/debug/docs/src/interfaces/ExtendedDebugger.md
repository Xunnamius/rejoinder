[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / ExtendedDebugger

# Interface: ExtendedDebugger()

Defined in: [packages/debug/src/index.ts:83](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L83)

A [InternalDebugger](InternalDebugger.md) interface extended with convenience methods.

## Extends

- `_InternalDebuggerNoExtends`.`DebuggerExtension`

> **ExtendedDebugger**(...`args`): `void`

Defined in: [packages/debug/src/index.ts:87](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L87)

A [InternalDebugger](InternalDebugger.md) interface extended with convenience methods.

## Parameters

### args

...\[`any`, `...args: any[]`\]

## Returns

`void`

## Properties

### \[$instances\]

> **\[$instances\]**: `DebuggerSubInstanceTypeGuard`\<\{ `$log`: [`ExtendedDebugger`](ExtendedDebugger.md); `error`: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md); `message`: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md); `warn`: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md); \}\>

Defined in: [packages/debug/src/index.ts:116](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L116)

An array of sub-instances (e.g. "error", "warn", etc), including the root
instance.

#### Inherited from

`DebuggerExtension.[$instances]`

***

### color

> **color**: `string`

Defined in: node\_modules/@types/debug/index.d.ts:42

#### Inherited from

`_InternalDebuggerNoExtends.color`

***

### destroy()

> **destroy**: () => `boolean`

Defined in: node\_modules/@types/debug/index.d.ts:47

#### Returns

`boolean`

#### Inherited from

`_InternalDebuggerNoExtends.destroy`

***

### diff

> **diff**: `number`

Defined in: node\_modules/@types/debug/index.d.ts:43

#### Inherited from

`_InternalDebuggerNoExtends.diff`

***

### enabled

> **enabled**: `boolean`

Defined in: node\_modules/@types/debug/index.d.ts:44

#### Inherited from

`_InternalDebuggerNoExtends.enabled`

***

### error

> **error**: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md)

Defined in: [packages/debug/src/index.ts:165](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L165)

A sub-instance for outputting error messages.

#### Inherited from

`DebuggerExtension.error`

***

### extend()

> **extend**: (...`args`) => [`ExtendedDebugger`](ExtendedDebugger.md)

Defined in: [packages/debug/src/index.ts:93](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L93)

Creates a new instance by appending `namespace` to the current instance's
namespace. The new instance will also inherit the current instance's `log`
function, if one exists.

#### Parameters

##### args

...\[`string`, `string`\]

#### Returns

[`ExtendedDebugger`](ExtendedDebugger.md)

***

### log()?

> `optional` **log**: (...`args`) => `any`

Defined in: [packages/debug/src/index.ts:59](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L59)

#### Parameters

##### args

...`any`[]

#### Returns

`any`

#### Inherited from

`_InternalDebuggerNoExtends.log`

***

### message

> **message**: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md)

Defined in: [packages/debug/src/index.ts:161](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L161)

A sub-instance for outputting messages to the attention of the reader.

#### Inherited from

`DebuggerExtension.message`

***

### namespace

> **namespace**: `string`

Defined in: node\_modules/@types/debug/index.d.ts:46

#### Inherited from

`_InternalDebuggerNoExtends.namespace`

***

### newline()

> **newline**: () => `void`

Defined in: [packages/debug/src/index.ts:97](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L97)

Send a blank newline to output.

#### Returns

`void`

***

### warn

> **warn**: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md)

Defined in: [packages/debug/src/index.ts:169](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L169)

A sub-instance for outputting warning messages.

#### Inherited from

`DebuggerExtension.warn`
