[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / ExtendedDebugger

# Interface: ExtendedDebugger()

Defined in: [packages/debug/src/index.ts:77](https://github.com/Xunnamius/rejoinder/blob/6a2f2c964cfd9707e5829cabd8d4be94ce6acda1/packages/debug/src/index.ts#L77)

A [InternalDebugger](InternalDebugger.md) interface extended with convenience methods.

## Extends

- `_InternalDebuggerNoExtends`.`DebuggerExtension`

> **ExtendedDebugger**(...`args`): `void`

Defined in: [packages/debug/src/index.ts:81](https://github.com/Xunnamius/rejoinder/blob/6a2f2c964cfd9707e5829cabd8d4be94ce6acda1/packages/debug/src/index.ts#L81)

A [InternalDebugger](InternalDebugger.md) interface extended with convenience methods.

## Parameters

### args

...\[`any`, `...args: any[]`\]

## Returns

`void`

## Properties

### \[$instances\]

> **\[$instances\]**: `DebuggerSubInstanceTypeGuard`\<\{ `$log`: [`ExtendedDebugger`](ExtendedDebugger.md); `error`: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md); `message`: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md); `warn`: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md); \}\>

Defined in: [packages/debug/src/index.ts:109](https://github.com/Xunnamius/rejoinder/blob/6a2f2c964cfd9707e5829cabd8d4be94ce6acda1/packages/debug/src/index.ts#L109)

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

Defined in: [packages/debug/src/index.ts:156](https://github.com/Xunnamius/rejoinder/blob/6a2f2c964cfd9707e5829cabd8d4be94ce6acda1/packages/debug/src/index.ts#L156)

A sub-instance for outputting error messages.

#### Inherited from

`DebuggerExtension.error`

***

### extend()

> **extend**: (...`args`) => [`ExtendedDebugger`](ExtendedDebugger.md)

Defined in: [packages/debug/src/index.ts:86](https://github.com/Xunnamius/rejoinder/blob/6a2f2c964cfd9707e5829cabd8d4be94ce6acda1/packages/debug/src/index.ts#L86)

Creates a new instance by appending `namespace` to the current logger's
namespace.

#### Parameters

##### args

...\[`string`, `string`\]

#### Returns

[`ExtendedDebugger`](ExtendedDebugger.md)

***

### log()?

> `optional` **log**: (...`args`) => `any`

Defined in: [packages/debug/src/index.ts:53](https://github.com/Xunnamius/rejoinder/blob/6a2f2c964cfd9707e5829cabd8d4be94ce6acda1/packages/debug/src/index.ts#L53)

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

Defined in: [packages/debug/src/index.ts:152](https://github.com/Xunnamius/rejoinder/blob/6a2f2c964cfd9707e5829cabd8d4be94ce6acda1/packages/debug/src/index.ts#L152)

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

Defined in: [packages/debug/src/index.ts:90](https://github.com/Xunnamius/rejoinder/blob/6a2f2c964cfd9707e5829cabd8d4be94ce6acda1/packages/debug/src/index.ts#L90)

Send a blank newline to output.

#### Returns

`void`

***

### warn

> **warn**: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md)

Defined in: [packages/debug/src/index.ts:160](https://github.com/Xunnamius/rejoinder/blob/6a2f2c964cfd9707e5829cabd8d4be94ce6acda1/packages/debug/src/index.ts#L160)

A sub-instance for outputting warning messages.

#### Inherited from

`DebuggerExtension.warn`
