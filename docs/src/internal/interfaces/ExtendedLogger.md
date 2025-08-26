[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / ExtendedLogger

# Interface: ExtendedLogger()

Defined in: [src/internal.ts:489](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L489)

A wrapper around [ExtendedDebugger](../../interfaces/ExtendedDebugger.md) representing the extension from
mere "debug" logger to general purpose "logger".

## Extends

- `_ExtendedLogger`

## Call Signature

> **ExtendedLogger**(...`args`): `void`

Defined in: [src/internal.ts:493](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L493)

Send an optionally-formatted message to output.

### Parameters

#### args

...\[`any`, `...args: any[]`\]

### Returns

`void`

## Call Signature

> **ExtendedLogger**(...`args`): `void`

Defined in: [src/internal.ts:497](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L497)

Send a tagged optionally-formatted message to output.

### Parameters

#### args

...\[`string`[], `any`, `...args: any[]`\]

### Returns

`void`

## Properties

### color

> **color**: `string`

Defined in: node\_modules/@types/debug/index.d.ts:42

#### Inherited from

`_ExtendedLogger.color`

***

### destroy()

> **destroy**: () => `boolean`

Defined in: node\_modules/@types/debug/index.d.ts:47

#### Returns

`boolean`

#### Inherited from

`_ExtendedLogger.destroy`

***

### diff

> **diff**: `number`

Defined in: node\_modules/@types/debug/index.d.ts:43

#### Inherited from

`_ExtendedLogger.diff`

***

### enabled

> **enabled**: `boolean`

Defined in: node\_modules/@types/debug/index.d.ts:44

#### Inherited from

`_ExtendedLogger.enabled`

***

### error

> **error**: `UnextendableInternalDebugger` & [`UnextendableInternalLogger`](UnextendableInternalLogger.md)

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:127

A sub-instance for outputting error messages.

#### Inherited from

`_ExtendedLogger.error`

***

### extend()

> **extend**: (...`args`) => `ExtendedLogger`

Defined in: [src/internal.ts:529](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L529)

Creates a new instance by appending `namespace` to the current instance's
namespace. The new instance will also inherit the current instance's `log`
function, if one exists, though **the two functions will not be strictly
equal.**

#### Parameters

##### args

...\[`string`, `string`\]

#### Returns

`ExtendedLogger`

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

[`UnextendableInternalLogger`](UnextendableInternalLogger.md).[`log`](UnextendableInternalLogger.md#log)

***

### message

> **message**: `UnextendableInternalDebugger` & [`UnextendableInternalLogger`](UnextendableInternalLogger.md)

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:123

A sub-instance for outputting messages to the attention of the reader.

#### Inherited from

`_ExtendedLogger.message`

***

### namespace

> **namespace**: `string`

Defined in: node\_modules/@types/debug/index.d.ts:46

#### Inherited from

`_ExtendedLogger.namespace`

***

### warn

> **warn**: `UnextendableInternalDebugger` & [`UnextendableInternalLogger`](UnextendableInternalLogger.md)

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:131

A sub-instance for outputting warning messages.

#### Inherited from

`_ExtendedLogger.warn`

## Methods

### newline()

#### Call Signature

> **newline**(...`args`): `void`

Defined in: [src/internal.ts:506](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L506)

Send a blank newline to output.

`outputMethod` determines if the newline will be output via the default
output method or the alternate output method. This parameter only has an
effect when using certain logger backends and typically corresponds to
stdout (`"default"`) and stderr (`"alternate"`).

##### Parameters

###### args

...\[`string`[], `"default"` \| `"alternate"`\]

##### Returns

`void`

#### Call Signature

> **newline**(...`args`): `void`

Defined in: [src/internal.ts:520](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L520)

Send a blank newline to output.

`outputMethod` determines if the newline will be output via the default
output method or the alternate output method. This parameter only has an
effect when using certain logger backends and typically corresponds to
stdout (`"default"`) and stderr (`"alternate"`).

##### Parameters

###### args

...\[`"default"` \| `"alternate"`\]

##### Returns

`void`
