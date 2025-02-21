[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / InternalDebugger

# Interface: InternalDebugger()

Defined in: [packages/debug/src/index.ts:51](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L51)

The base `Debugger` interface coming from the [debug](https://npm.im/debug)
package.

## Extends

- `__Debugger`

## Extended by

- [`UnextendableInternalDebugger`](UnextendableInternalDebugger.md)

> **InternalDebugger**(...`args`): `void`

Defined in: [packages/debug/src/index.ts:55](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L55)

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

Defined in: [packages/debug/src/index.ts:59](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L59)

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
