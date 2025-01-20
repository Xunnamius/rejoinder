[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / ExtendedLogger

# Interface: ExtendedLogger()

Defined in: [src/internal.ts:452](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L452)

A wrapper around [ExtendedDebugger](../../interfaces/ExtendedDebugger.md) representing the extension from
mere "debug" logger to general purpose "logger".

## Extends

- `_ExtendedLogger`\<[`ExtendedLogger`](ExtendedLogger.md)\>

> **ExtendedLogger**(...`args`): `void`

Defined in: [src/internal.ts:456](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L456)

A wrapper around [ExtendedDebugger](../../interfaces/ExtendedDebugger.md) representing the extension from
mere "debug" logger to general purpose "logger".

## Parameters

### args

...\[`any`, `...args: any[]`\]

## Returns

`void`

> **ExtendedLogger**(...`args`): `void`

Defined in: [src/internal.ts:460](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L460)

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

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:120

A sub-instance for outputting error messages.

#### Inherited from

`_ExtendedLogger.error`

***

### extend()

> **extend**: (...`args`) => [`ExtendedLogger`](ExtendedLogger.md)

Defined in: [src/internal.ts:490](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L490)

Creates a new instance by appending `namespace` to the current logger's
namespace.

#### Parameters

##### args

...\[`string`, `string`\]

#### Returns

[`ExtendedLogger`](ExtendedLogger.md)

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

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:116

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

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:124

A sub-instance for outputting warning messages.

#### Inherited from

`_ExtendedLogger.warn`

## Methods

### newline()

#### Call Signature

> **newline**(...`args`): `void`

Defined in: [src/internal.ts:469](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L469)

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

Defined in: [src/internal.ts:483](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L483)

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
