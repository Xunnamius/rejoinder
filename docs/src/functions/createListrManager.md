[**rejoinder**](../../README.md)

***

[rejoinder](../../README.md) / [src](../README.md) / createListrManager

# Function: createListrManager()

> **createListrManager**\<`T`\>(`options`?): `Manager`\<`T`, `"simple"` \| `"verbose"`\>

Defined in: src/index.ts:291

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
