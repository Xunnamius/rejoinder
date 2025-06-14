[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / ExtendedLogger

# Interface: ExtendedLogger()

Defined in: [src/internal.ts:457](https://github.com/Xunnamius/rejoinder/blob/2e193401f811190578a6daed325a2ddce540538d/src/internal.ts#L457)

A wrapper around [ExtendedDebugger](../../interfaces/ExtendedDebugger.md) representing the extension from
mere "debug" logger to general purpose "logger".

## Extends

- `_ExtendedLogger`\<`ExtendedLogger`\>

## Call Signature

> **ExtendedLogger**(...`args`): `void`

Defined in: [src/internal.ts:461](https://github.com/Xunnamius/rejoinder/blob/2e193401f811190578a6daed325a2ddce540538d/src/internal.ts#L461)

A wrapper around [ExtendedDebugger](../../interfaces/ExtendedDebugger.md) representing the extension from
mere "debug" logger to general purpose "logger".

### Parameters

#### args

...\[`any`, `...args: any[]`\]

### Returns

`void`

## Call Signature

> **ExtendedLogger**(...`args`): `void`

Defined in: [src/internal.ts:465](https://github.com/Xunnamius/rejoinder/blob/2e193401f811190578a6daed325a2ddce540538d/src/internal.ts#L465)

A wrapper around [ExtendedDebugger](../../interfaces/ExtendedDebugger.md) representing the extension from
mere "debug" logger to general purpose "logger".

### Parameters

#### args

...\[`string`[], `any`, `...args: any[]`\]

### Returns

`void`

## Properties

### \[$instances\]

> **\[$instances\]**: `DebuggerSubInstanceTypeGuard`\<\{ `$log`: `ExtendedLogger`; `error`: [`UnextendableInternalLogger`](UnextendableInternalLogger.md); `message`: [`UnextendableInternalLogger`](UnextendableInternalLogger.md); `warn`: [`UnextendableInternalLogger`](UnextendableInternalLogger.md); \}\>

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:91

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

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:121

A sub-instance for outputting error messages.

#### Inherited from

`_ExtendedLogger.error`

***

### extend()

> **extend**: (...`args`) => `ExtendedLogger`

Defined in: [src/internal.ts:497](https://github.com/Xunnamius/rejoinder/blob/2e193401f811190578a6daed325a2ddce540538d/src/internal.ts#L497)

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

`_ExtendedLogger.log`

***

### message

> **message**: [`UnextendableInternalLogger`](UnextendableInternalLogger.md)

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:117

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

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:125

A sub-instance for outputting warning messages.

#### Inherited from

`_ExtendedLogger.warn`

## Methods

### newline()

#### Call Signature

> **newline**(...`args`): `void`

Defined in: [src/internal.ts:474](https://github.com/Xunnamius/rejoinder/blob/2e193401f811190578a6daed325a2ddce540538d/src/internal.ts#L474)

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

Defined in: [src/internal.ts:488](https://github.com/Xunnamius/rejoinder/blob/2e193401f811190578a6daed325a2ddce540538d/src/internal.ts#L488)

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
