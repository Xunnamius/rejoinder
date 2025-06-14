[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / ExtendedDebugger

# Interface: ExtendedDebugger()

Defined in: [packages/debug/src/index.ts:81](https://github.com/Xunnamius/rejoinder/blob/dd2fd7448223b17b0b7fad4f16950e431fddfc71/packages/debug/src/index.ts#L81)

A [InternalDebugger](InternalDebugger.md) interface extended with convenience methods.

## Extends

- `_InternalDebuggerNoExtends`

> **ExtendedDebugger**(...`args`): `void`

Defined in: [packages/debug/src/index.ts:85](https://github.com/Xunnamius/rejoinder/blob/dd2fd7448223b17b0b7fad4f16950e431fddfc71/packages/debug/src/index.ts#L85)

A [InternalDebugger](InternalDebugger.md) interface extended with convenience methods.

## Parameters

### args

...\[`any`, `...args: any[]`\]

## Returns

`void`

## Properties

### \[$instances\]

> **\[$instances\]**: `DebuggerSubInstanceTypeGuard`\<\{ `$log`: `ExtendedDebugger`; `error`: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md); `message`: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md); `warn`: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md); \}\>

Defined in: [packages/debug/src/index.ts:114](https://github.com/Xunnamius/rejoinder/blob/dd2fd7448223b17b0b7fad4f16950e431fddfc71/packages/debug/src/index.ts#L114)

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

Defined in: [packages/debug/src/index.ts:163](https://github.com/Xunnamius/rejoinder/blob/dd2fd7448223b17b0b7fad4f16950e431fddfc71/packages/debug/src/index.ts#L163)

A sub-instance for outputting error messages.

#### Inherited from

`DebuggerExtension.error`

***

### extend()

> **extend**: (...`args`) => `ExtendedDebugger`

Defined in: [packages/debug/src/index.ts:91](https://github.com/Xunnamius/rejoinder/blob/dd2fd7448223b17b0b7fad4f16950e431fddfc71/packages/debug/src/index.ts#L91)

Creates a new instance by appending `namespace` to the current instance's
namespace. The new instance will also inherit the current instance's `log`
function, if one exists.

#### Parameters

##### args

...\[`string`, `string`\]

#### Returns

`ExtendedDebugger`

***

### log()?

> `optional` **log**: (...`args`) => `any`

Defined in: [packages/debug/src/index.ts:57](https://github.com/Xunnamius/rejoinder/blob/dd2fd7448223b17b0b7fad4f16950e431fddfc71/packages/debug/src/index.ts#L57)

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

Defined in: [packages/debug/src/index.ts:159](https://github.com/Xunnamius/rejoinder/blob/dd2fd7448223b17b0b7fad4f16950e431fddfc71/packages/debug/src/index.ts#L159)

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

Defined in: [packages/debug/src/index.ts:95](https://github.com/Xunnamius/rejoinder/blob/dd2fd7448223b17b0b7fad4f16950e431fddfc71/packages/debug/src/index.ts#L95)

Send a blank newline to output.

#### Returns

`void`

***

### warn

> **warn**: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md)

Defined in: [packages/debug/src/index.ts:167](https://github.com/Xunnamius/rejoinder/blob/dd2fd7448223b17b0b7fad4f16950e431fddfc71/packages/debug/src/index.ts#L167)

A sub-instance for outputting warning messages.

#### Inherited from

`DebuggerExtension.warn`
