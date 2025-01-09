[**rejoinder**](../../README.md)

***

[rejoinder](../../README.md) / [src](../README.md) / ExtendedLogger

# Interface: ExtendedLogger()

Defined in: [src/index.ts:86](https://github.com/Xunnamius/rejoinder/blob/64011a11a45735665b3ce75107a37b187f35af77/src/index.ts#L86)

A wrapper around [ExtendedDebugger](ExtendedDebugger.md) representing the extension from
mere "debug" logger to general purpose "logger".

## Extends

- `_ExtendedLogger`\<[`ExtendedLogger`](ExtendedLogger.md)\>

> **ExtendedLogger**(...`args`): `void`

Defined in: [src/index.ts:90](https://github.com/Xunnamius/rejoinder/blob/64011a11a45735665b3ce75107a37b187f35af77/src/index.ts#L90)

A wrapper around [ExtendedDebugger](ExtendedDebugger.md) representing the extension from
mere "debug" logger to general purpose "logger".

## Parameters

### args

...\[`any`, `...args: any[]`\]

## Returns

`void`

> **ExtendedLogger**(...`args`): `void`

Defined in: [src/index.ts:94](https://github.com/Xunnamius/rejoinder/blob/64011a11a45735665b3ce75107a37b187f35af77/src/index.ts#L94)

A wrapper around [ExtendedDebugger](ExtendedDebugger.md) representing the extension from
mere "debug" logger to general purpose "logger".

## Parameters

### args

...\[`string`[], `any`, `...args: any[]`\]

## Returns

`void`

## Properties

### \[$instances\]

> **\[$instances\]**: `DebuggerSubInstanceTypeGuard`\<\{ `$log`: [`ExtendedLogger`](ExtendedLogger.md); `error`: [`UnextendableInternalLogger`](UnextendableInternalLogger.md); `message`: [`UnextendableInternalLogger`](UnextendableInternalLogger.md); `warn`: [`UnextendableInternalLogger`](UnextendableInternalLogger.md); \}\>

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:90

An array of sub-instances (e.g. "error", "warn", etc), including the root
instance.

#### Inherited from

`_ExtendedLogger.[$instances]`

***

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

> **error**: [`UnextendableInternalLogger`](UnextendableInternalLogger.md)

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:118

A sub-instance for outputting error messages.

#### Inherited from

`_ExtendedLogger.error`

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

`_ExtendedLogger.log`

***

### message

> **message**: [`UnextendableInternalLogger`](UnextendableInternalLogger.md)

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:114

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

> **warn**: [`UnextendableInternalLogger`](UnextendableInternalLogger.md)

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:122

A sub-instance for outputting warning messages.

#### Inherited from

`_ExtendedLogger.warn`

## Methods

### extend()

> **extend**(...`args`): [`ExtendedLogger`](ExtendedLogger.md)

Defined in: [src/index.ts:124](https://github.com/Xunnamius/rejoinder/blob/64011a11a45735665b3ce75107a37b187f35af77/src/index.ts#L124)

Creates a new instance by appending `namespace` to the current logger's
namespace.

#### Parameters

##### args

...\[`string`, `string`\]

#### Returns

[`ExtendedLogger`](ExtendedLogger.md)

***

### newline()

#### Call Signature

> **newline**(...`args`): `void`

Defined in: [src/index.ts:103](https://github.com/Xunnamius/rejoinder/blob/64011a11a45735665b3ce75107a37b187f35af77/src/index.ts#L103)

Send a blank newline to output.

##### Parameters

###### args

...\[`string`[], `"default"` \| `"alternate"`\]

##### Returns

`void`

#### Call Signature

> **newline**(...`args`): `void`

Defined in: [src/index.ts:117](https://github.com/Xunnamius/rejoinder/blob/64011a11a45735665b3ce75107a37b187f35af77/src/index.ts#L117)

Send a blank newline to output.

##### Parameters

###### args

...\[`"default"` \| `"alternate"`\]

##### Returns

`void`
