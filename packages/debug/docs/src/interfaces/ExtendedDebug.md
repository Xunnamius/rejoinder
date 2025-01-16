[**@-xun/debug**](../../README.md)

***

[@-xun/debug](../../README.md) / [src](../README.md) / ExtendedDebug

# Interface: ExtendedDebug()

Defined in: [packages/debug/src/index.ts:67](https://github.com/Xunnamius/rejoinder/blob/11cd3e0539affb5099730b882c9b7bade1c1b092/packages/debug/src/index.ts#L67)

An InternalDebug factory interface that returns
[ExtendedDebugger](ExtendedDebugger.md) instances.

## Extends

- `InternalDebug`

> **ExtendedDebug**(...`args`): [`ExtendedDebugger`](ExtendedDebugger.md)

Defined in: [packages/debug/src/index.ts:71](https://github.com/Xunnamius/rejoinder/blob/11cd3e0539affb5099730b882c9b7bade1c1b092/packages/debug/src/index.ts#L71)

An InternalDebug factory interface that returns
[ExtendedDebugger](ExtendedDebugger.md) instances.

## Parameters

### args

...\[`string`\]

## Returns

[`ExtendedDebugger`](ExtendedDebugger.md)

> **ExtendedDebug**(...`args`): [`InternalDebugger`](InternalDebugger.md)

Defined in: [packages/debug/src/index.ts:67](https://github.com/Xunnamius/rejoinder/blob/11cd3e0539affb5099730b882c9b7bade1c1b092/packages/debug/src/index.ts#L67)

An InternalDebug factory interface that returns
[ExtendedDebugger](ExtendedDebugger.md) instances.

## Parameters

### args

...\[`string`\]

## Returns

[`InternalDebugger`](InternalDebugger.md)

> **ExtendedDebug**(`namespace`): `Debugger`

Defined in: [packages/debug/src/index.ts:67](https://github.com/Xunnamius/rejoinder/blob/11cd3e0539affb5099730b882c9b7bade1c1b092/packages/debug/src/index.ts#L67)

An InternalDebug factory interface that returns
[ExtendedDebugger](ExtendedDebugger.md) instances.

## Parameters

### namespace

`string`

## Returns

`Debugger`

## Properties

### coerce()

> **coerce**: (`val`) => `any`

Defined in: node\_modules/@types/debug/index.d.ts:9

#### Parameters

##### val

`any`

#### Returns

`any`

#### Inherited from

`InternalDebug.coerce`

***

### disable()

> **disable**: () => `string`

Defined in: node\_modules/@types/debug/index.d.ts:10

#### Returns

`string`

#### Inherited from

`InternalDebug.disable`

***

### enable()

> **enable**: (`namespaces`) => `void`

Defined in: node\_modules/@types/debug/index.d.ts:11

#### Parameters

##### namespaces

`string`

#### Returns

`void`

#### Inherited from

`InternalDebug.enable`

***

### enabled()

> **enabled**: (`namespaces`) => `boolean`

Defined in: node\_modules/@types/debug/index.d.ts:12

#### Parameters

##### namespaces

`string`

#### Returns

`boolean`

#### Inherited from

`InternalDebug.enabled`

***

### formatArgs()

> **formatArgs**: (`this`, `args`) => `void`

Defined in: node\_modules/@types/debug/index.d.ts:13

#### Parameters

##### this

`Debugger`

##### args

`any`[]

#### Returns

`void`

#### Inherited from

`InternalDebug.formatArgs`

***

### formatters

> **formatters**: `Formatters`

Defined in: node\_modules/@types/debug/index.d.ts:21

#### Inherited from

`InternalDebug.formatters`

***

### humanize()

> **humanize**: (`value`, `options`?) => `string`(`value`) => `number`

Defined in: node\_modules/@types/debug/index.d.ts:16

Short/Long format for `value`.

#### Parameters

##### value

`number`

##### options?

###### long

`boolean`

#### Returns

`string`

Parse the given `value` and return milliseconds.

#### Parameters

##### value

`string`

#### Returns

`number`

#### Inherited from

`InternalDebug.humanize`

***

### inspectOpts?

> `optional` **inspectOpts**: `object`

Defined in: node\_modules/@types/debug/index.d.ts:23

#### colors?

> `optional` **colors**: `null` \| `number` \| `boolean`

#### depth?

> `optional` **depth**: `null` \| `number` \| `boolean`

#### hideDate?

> `optional` **hideDate**: `null` \| `number` \| `boolean`

#### showHidden?

> `optional` **showHidden**: `null` \| `number` \| `boolean`

#### Inherited from

`InternalDebug.inspectOpts`

***

### log()

> **log**: (...`args`) => `any`

Defined in: node\_modules/@types/debug/index.d.ts:14

#### Parameters

##### args

...`any`[]

#### Returns

`any`

#### Inherited from

`InternalDebug.log`

***

### names

> **names**: `RegExp`[]

Defined in: node\_modules/@types/debug/index.d.ts:18

#### Inherited from

`InternalDebug.names`

***

### selectColor()

> **selectColor**: (`namespace`) => `string` \| `number`

Defined in: node\_modules/@types/debug/index.d.ts:15

#### Parameters

##### namespace

`string`

#### Returns

`string` \| `number`

#### Inherited from

`InternalDebug.selectColor`

***

### skips

> **skips**: `RegExp`[]

Defined in: node\_modules/@types/debug/index.d.ts:19

#### Inherited from

`InternalDebug.skips`
