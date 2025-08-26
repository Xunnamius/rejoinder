[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / UnextendableInternalLogger

# Interface: UnextendableInternalLogger()

Defined in: [src/internal.ts:474](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L474)

An instance of UnextendableInternalDebugger that that belongs to an
[ExtendedLogger](ExtendedLogger.md).

## Extends

- `UnextendableInternalDebugger`

## Call Signature

> **UnextendableInternalLogger**(...`args`): `void`

Defined in: [src/internal.ts:478](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L478)

Send an optionally-formatted message to output.

### Parameters

#### args

...\[`any`, `...args: any[]`\]

### Returns

`void`

## Call Signature

> **UnextendableInternalLogger**(...`args`): `void`

Defined in: [src/internal.ts:482](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L482)

Send a tagged optionally-formatted message to output.

### Parameters

#### args

...\[`string`[], `any`, `...args: any[]`\]

### Returns

`void`

## Call Signature

> **UnextendableInternalLogger**(...`args`): `void`

Defined in: [src/internal.ts:474](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L474)

Send an optionally-formatted message to output.

### Parameters

#### args

...\[`any`, `...args: any[]`\]

### Returns

`void`

## Properties

### color

> **color**: `string`

Defined in: node\_modules/@types/debug/index.d.ts:42

#### Inherited from

`UnextendableInternalDebugger.color`

***

### destroy()

> **destroy**: () => `boolean`

Defined in: node\_modules/@types/debug/index.d.ts:47

#### Returns

`boolean`

#### Inherited from

`UnextendableInternalDebugger.destroy`

***

### diff

> **diff**: `number`

Defined in: node\_modules/@types/debug/index.d.ts:43

#### Inherited from

`UnextendableInternalDebugger.diff`

***

### enabled

> **enabled**: `boolean`

Defined in: node\_modules/@types/debug/index.d.ts:44

#### Inherited from

`UnextendableInternalDebugger.enabled`

***

### extend()

> **extend**: (...`args`) => `never`

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:48

#### Parameters

##### args

...\[`string`, `string`\]

#### Returns

`never`

#### Inherited from

`UnextendableInternalDebugger.extend`

***

### log()?

> `optional` **log**: (...`args`) => `any`

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:41

#### Parameters

##### args

...`any`[]

#### Returns

`any`

#### Inherited from

`UnextendableInternalDebugger.log`

***

### namespace

> **namespace**: `string`

Defined in: node\_modules/@types/debug/index.d.ts:46

#### Inherited from

`UnextendableInternalDebugger.namespace`
