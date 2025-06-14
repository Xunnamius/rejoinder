[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / ExtendedDebugger

# Interface: ExtendedDebugger()

Defined in: [packages/debug/src/index.ts:81](https://github.com/Xunnamius/rejoinder/blob/f64c1e0c19bc97c588be2ae8d7b20734d4ed6719/packages/debug/src/index.ts#L81)

A [InternalDebugger](InternalDebugger.md) interface extended with convenience methods.

## Extends

- `_InternalDebuggerNoExtends`

> **ExtendedDebugger**(...`args`): `void`

Defined in: [packages/debug/src/index.ts:85](https://github.com/Xunnamius/rejoinder/blob/f64c1e0c19bc97c588be2ae8d7b20734d4ed6719/packages/debug/src/index.ts#L85)

A [InternalDebugger](InternalDebugger.md) interface extended with convenience methods.

## Parameters

### args

...\[`any`, `...args: any[]`\]

## Returns

`void`

## Properties

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

Defined in: [packages/debug/src/index.ts:166](https://github.com/Xunnamius/rejoinder/blob/f64c1e0c19bc97c588be2ae8d7b20734d4ed6719/packages/debug/src/index.ts#L166)

A sub-instance for outputting error messages.

#### Inherited from

`DebuggerExtension.error`

***

### extend()

> **extend**: (...`args`) => `ExtendedDebugger`

Defined in: [packages/debug/src/index.ts:91](https://github.com/Xunnamius/rejoinder/blob/f64c1e0c19bc97c588be2ae8d7b20734d4ed6719/packages/debug/src/index.ts#L91)

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

Defined in: [packages/debug/src/index.ts:57](https://github.com/Xunnamius/rejoinder/blob/f64c1e0c19bc97c588be2ae8d7b20734d4ed6719/packages/debug/src/index.ts#L57)

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

Defined in: [packages/debug/src/index.ts:162](https://github.com/Xunnamius/rejoinder/blob/f64c1e0c19bc97c588be2ae8d7b20734d4ed6719/packages/debug/src/index.ts#L162)

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

Defined in: [packages/debug/src/index.ts:95](https://github.com/Xunnamius/rejoinder/blob/f64c1e0c19bc97c588be2ae8d7b20734d4ed6719/packages/debug/src/index.ts#L95)

Send a blank newline to output.

#### Returns

`void`

***

### warn

> **warn**: [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md)

Defined in: [packages/debug/src/index.ts:170](https://github.com/Xunnamius/rejoinder/blob/f64c1e0c19bc97c588be2ae8d7b20734d4ed6719/packages/debug/src/index.ts#L170)

A sub-instance for outputting warning messages.

#### Inherited from

`DebuggerExtension.warn`
