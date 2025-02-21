[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / UnextendableInternalDebugger

# Interface: UnextendableInternalDebugger()

Defined in: [packages/debug/src/index.ts:65](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L65)

An instance of [InternalDebugger](InternalDebugger.md) that cannot be extended via
`InternalDebugger.extend`.

## Extends

- [`InternalDebugger`](InternalDebugger.md)

> **UnextendableInternalDebugger**(...`args`): `void`

Defined in: [packages/debug/src/index.ts:65](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L65)

An instance of [InternalDebugger](InternalDebugger.md) that cannot be extended via
`InternalDebugger.extend`.

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

[`InternalDebugger`](InternalDebugger.md).[`color`](InternalDebugger.md#color)

***

### destroy()

> **destroy**: () => `boolean`

Defined in: node\_modules/@types/debug/index.d.ts:47

#### Returns

`boolean`

#### Inherited from

[`InternalDebugger`](InternalDebugger.md).[`destroy`](InternalDebugger.md#destroy)

***

### diff

> **diff**: `number`

Defined in: node\_modules/@types/debug/index.d.ts:43

#### Inherited from

[`InternalDebugger`](InternalDebugger.md).[`diff`](InternalDebugger.md#diff)

***

### enabled

> **enabled**: `boolean`

Defined in: node\_modules/@types/debug/index.d.ts:44

#### Inherited from

[`InternalDebugger`](InternalDebugger.md).[`enabled`](InternalDebugger.md#enabled)

***

### extend()

> **extend**: (...`args`) => `never`

Defined in: [packages/debug/src/index.ts:66](https://github.com/Xunnamius/rejoinder/blob/cea65e14bbc115b3245cd3920912f80db8340a26/packages/debug/src/index.ts#L66)

#### Parameters

##### args

...\[`string`, `string`\]

#### Returns

`never`

#### Overrides

[`InternalDebugger`](InternalDebugger.md).[`extend`](InternalDebugger.md#extend)

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

[`InternalDebugger`](InternalDebugger.md).[`log`](InternalDebugger.md#log)

***

### namespace

> **namespace**: `string`

Defined in: node\_modules/@types/debug/index.d.ts:46

#### Inherited from

[`InternalDebugger`](InternalDebugger.md).[`namespace`](InternalDebugger.md#namespace-2)
