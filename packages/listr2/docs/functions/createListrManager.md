[**rejoinder-listr2**](../README.md)

***

[rejoinder-listr2](../README.md) / createListrManager

# Function: createListrManager()

> **createListrManager**\<`T`\>(`options`?): `Manager`\<`T`, `"simple"` \| `"verbose"`\>

Defined in: [index.ts:83](https://github.com/Xunnamius/rejoinder/blob/133b4f924be655aa01a49d03e5d1594795ffe3bd/packages/listr2/src/index.ts#L83)

Create and return a new Listr2 Manager instance pre-configured to
work in harmony with rejoinder.

Specifically, this instance:

  - Has good consistent defaults.

  - Switches to the verbose renderer when the DEBUG environment variable is
    present or any of the debug logger namespaces are enabled.

## Type Parameters

• **T** = `any`

## Parameters

### options?

#### overrides

`ListrBaseClassOptions`

Properties provided here will override the defaults passed to the
Manager constructor.

## Returns

`Manager`\<`T`, `"simple"` \| `"verbose"`\>
