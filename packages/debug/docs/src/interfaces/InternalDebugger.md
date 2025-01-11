[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / InternalDebugger

# Interface: InternalDebugger()

Defined in: [packages/debug/src/index.ts:45](https://github.com/Xunnamius/rejoinder/blob/6a2f2c964cfd9707e5829cabd8d4be94ce6acda1/packages/debug/src/index.ts#L45)

The base `Debugger` interface coming from the [debug](https://npm.im/debug)
package.

## Extends

- `__Debugger`

## Extended by

- [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md)

> **InternalDebugger**(...`args`): `void`

Defined in: [packages/debug/src/index.ts:49](https://github.com/Xunnamius/rejoinder/blob/6a2f2c964cfd9707e5829cabd8d4be94ce6acda1/packages/debug/src/index.ts#L49)

The base `Debugger` interface coming from the [debug](https://npm.im/debug)
package.

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

`__Debugger.color`

***

### destroy()

> **destroy**: () => `boolean`

Defined in: node\_modules/@types/debug/index.d.ts:47

#### Returns

`boolean`

#### Inherited from

`__Debugger.destroy`

***

### diff

> **diff**: `number`

Defined in: node\_modules/@types/debug/index.d.ts:43

#### Inherited from

`__Debugger.diff`

***

### enabled

> **enabled**: `boolean`

Defined in: node\_modules/@types/debug/index.d.ts:44

#### Inherited from

`__Debugger.enabled`

***

### extend()

> **extend**: (`namespace`, `delimiter`?) => `Debugger`

Defined in: node\_modules/@types/debug/index.d.ts:48

#### Parameters

##### namespace

`string`

##### delimiter?

`string`

#### Returns

`Debugger`

#### Inherited from

`__Debugger.extend`

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

`__Debugger.log`

***

### namespace

> **namespace**: `string`

Defined in: node\_modules/@types/debug/index.d.ts:46

#### Inherited from

`__Debugger.namespace`
