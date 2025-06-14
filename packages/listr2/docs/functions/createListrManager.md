[**rejoinder-listr2**](../README.md)

***

[rejoinder-listr2](../README.md) / createListrManager

# Function: createListrManager()

> **createListrManager**\<`ListrContext`\>(`options?`): `Manager`\<`ListrContext`, `"default"`, `"simple"` \| `"verbose"`\>

Defined in: [packages/listr2/src/index.ts:134](https://github.com/Xunnamius/rejoinder/blob/5895f90afed824f3ae6f43dc429a04f1055f6c5b/packages/listr2/src/index.ts#L134)

Create and return a new Listr2 Manager instance pre-configured to
work in harmony with rejoinder.

Specifically, this instance:

  - Has good consistent defaults.

  - Switches to the verbose renderer when the DEBUG environment variable is
    present or any of the debug logger namespaces are enabled.

## Type Parameters

### ListrContext

`ListrContext` = `any`

## Parameters

### options?

#### overrides?

`ListrBaseClassOptions`\<`any`, `"default"`, `"simple"`\>

Properties provided here will override the defaults passed to the
Manager constructor.

## Returns

`Manager`\<`ListrContext`, `"default"`, `"simple"` \| `"verbose"`\>
