[**rejoinder**](../../README.md)

***

[rejoinder](../../README.md) / [src](../README.md) / ExtendedDebugger

# Interface: ExtendedDebugger()

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:63

A InternalDebugger interface extended with convenience methods.

## Extends

- `_InternalDebuggerNoExtends`.`DebuggerExtension`

> **ExtendedDebugger**(...`args`): `void`

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:67

A InternalDebugger interface extended with convenience methods.

## Parameters

### args

...\[`any`, `...args: any[]`\]

## Returns

`void`

## Properties

### \[$instances\]

> **\[$instances\]**: `DebuggerSubInstanceTypeGuard`\<\{ `$log`: [`ExtendedDebugger`](ExtendedDebugger.md); `error`: `UnextendableInternalDebugger`; `message`: `UnextendableInternalDebugger`; `warn`: `UnextendableInternalDebugger`; \}\>

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:91

An array of sub-instances (e.g. "error", "warn", etc), including the root
instance.

#### Inherited from

`DebuggerExtension.[$instances]`

***

### color

> **color**: `string`

Defined in: node\_modules/@types/debug/index.d.ts:42

#### Inherited from

`_InternalDebuggerNoExtends.color`

***

### destroy()

> **destroy**: () => `boolean`

Defined in: node\_modules/@types/debug/index.d.ts:47

#### Returns

`boolean`

#### Inherited from

`_InternalDebuggerNoExtends.destroy`

***

### diff

> **diff**: `number`

Defined in: node\_modules/@types/debug/index.d.ts:43

#### Inherited from

`_InternalDebuggerNoExtends.diff`

***

### enabled

> **enabled**: `boolean`

Defined in: node\_modules/@types/debug/index.d.ts:44

#### Inherited from

`_InternalDebuggerNoExtends.enabled`

***

### error

> **error**: `UnextendableInternalDebugger`

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:121

A sub-instance for outputting error messages.

#### Inherited from

`DebuggerExtension.error`

***

### extend()

> **extend**: (...`args`) => [`ExtendedDebugger`](ExtendedDebugger.md)

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:73

Creates a new instance by appending `namespace` to the current instance's
namespace. The new instance will also inherit the current instance's `log`
function, if one exists.

#### Parameters

##### args

...\[`string`, `string`\]

#### Returns

[`ExtendedDebugger`](ExtendedDebugger.md)

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

`_InternalDebuggerNoExtends.log`

***

### message

> **message**: `UnextendableInternalDebugger`

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:117

A sub-instance for outputting messages to the attention of the reader.

#### Inherited from

`DebuggerExtension.message`

***

### namespace

> **namespace**: `string`

Defined in: node\_modules/@types/debug/index.d.ts:46

#### Inherited from

`_InternalDebuggerNoExtends.namespace`

***

### newline()

> **newline**: () => `void`

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:77

Send a blank newline to output.

#### Returns

`void`

***

### warn

> **warn**: `UnextendableInternalDebugger`

Defined in: packages/debug/dist/packages/debug/src/index.d.ts:125

A sub-instance for outputting warning messages.

#### Inherited from

`DebuggerExtension.warn`
