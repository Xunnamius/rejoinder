[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / InternalDebugger

# Interface: InternalDebugger()

Defined in: [packages/debug/src/index.ts:49](https://github.com/Xunnamius/rejoinder/blob/dd2fd7448223b17b0b7fad4f16950e431fddfc71/packages/debug/src/index.ts#L49)

The base `Debugger` interface coming from the [debug](https://npm.im/debug)
package.

## Extends

- `__Debugger`

## Extended by

- [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md)

> **InternalDebugger**(...`args`): `void`

Defined in: [packages/debug/src/index.ts:53](https://github.com/Xunnamius/rejoinder/blob/dd2fd7448223b17b0b7fad4f16950e431fddfc71/packages/debug/src/index.ts#L53)

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

> **extend**: (`namespace`, `delimiter?`) => `Debugger`

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

Defined in: [packages/debug/src/index.ts:57](https://github.com/Xunnamius/rejoinder/blob/dd2fd7448223b17b0b7fad4f16950e431fddfc71/packages/debug/src/index.ts#L57)

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
