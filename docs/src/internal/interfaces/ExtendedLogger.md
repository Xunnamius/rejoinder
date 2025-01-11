[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / ExtendedLogger

# Interface: ExtendedLogger()

Defined in: [src/internal.ts:361](https://github.com/Xunnamius/rejoinder/blob/da115820e8e078fc8d5f9295b571a8c5d1e5f9e7/src/internal.ts#L361)

A wrapper around [ExtendedDebugger](../../interfaces/ExtendedDebugger.md) representing the extension from
mere "debug" logger to general purpose "logger".

## Extends

- `_ExtendedLogger`\<[`ExtendedLogger`](ExtendedLogger.md)\>

> **ExtendedLogger**(...`args`): `void`

Defined in: [src/internal.ts:365](https://github.com/Xunnamius/rejoinder/blob/da115820e8e078fc8d5f9295b571a8c5d1e5f9e7/src/internal.ts#L365)

A wrapper around [ExtendedDebugger](../../interfaces/ExtendedDebugger.md) representing the extension from
mere "debug" logger to general purpose "logger".

## Parameters

### args

...\[`any`, `...args: any[]`\]

## Returns

`void`

> **ExtendedLogger**(...`args`): `void`

Defined in: [src/internal.ts:369](https://github.com/Xunnamius/rejoinder/blob/da115820e8e078fc8d5f9295b571a8c5d1e5f9e7/src/internal.ts#L369)

A wrapper around [ExtendedDebugger](../../interfaces/ExtendedDebugger.md) representing the extension from
mere "debug" logger to general purpose "logger".

## Parameters

### args

...\[`string`[], `any`, `...args: any[]`\]

## Returns

`void`

## Properties

### \[$instances\]

> **\[$instances\]**: `DebuggerSubInstanceTypeGuard`\<\{ `$log`: [`ExtendedLogger`](ExtendedLogger.md); `error`: [`UnextendableInternalLogger`](UnextendableInternalLogger.md); `message`: [`UnextendableInternalLogger`](UnextendableInternalLogger.md); `warn`: [`UnextendableInternalLogger`](UnextendableInternalLogger.md); \}\>

Defined in: node\_modules/@-xun/debug/dist/packages/debug/src/index.d.ts:90

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

Defined in: node\_modules/@-xun/debug/dist/packages/debug/src/index.d.ts:118

A sub-instance for outputting error messages.

#### Inherited from

`_ExtendedLogger.error`

***

### log()?

> `optional` **log**: (...`args`) => `any`

Defined in: node\_modules/@-xun/debug/dist/packages/debug/src/index.d.ts:41

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

Defined in: node\_modules/@-xun/debug/dist/packages/debug/src/index.d.ts:114

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

Defined in: node\_modules/@-xun/debug/dist/packages/debug/src/index.d.ts:122

A sub-instance for outputting warning messages.

#### Inherited from

`_ExtendedLogger.warn`

## Methods

### extend()

> **extend**(...`args`): [`ExtendedLogger`](ExtendedLogger.md)

Defined in: [src/internal.ts:399](https://github.com/Xunnamius/rejoinder/blob/da115820e8e078fc8d5f9295b571a8c5d1e5f9e7/src/internal.ts#L399)

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

Defined in: [src/internal.ts:378](https://github.com/Xunnamius/rejoinder/blob/da115820e8e078fc8d5f9295b571a8c5d1e5f9e7/src/internal.ts#L378)

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

Defined in: [src/internal.ts:392](https://github.com/Xunnamius/rejoinder/blob/da115820e8e078fc8d5f9295b571a8c5d1e5f9e7/src/internal.ts#L392)

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
