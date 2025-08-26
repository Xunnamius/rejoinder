[**rejoinder-listr2**](../README.md)

***

[rejoinder-listr2](../README.md) / createListrManager

# Function: createListrManager()

> **createListrManager**\<`ListrContext`\>(`options?`): `Manager`\<`ListrContext`, `"default"`, `"simple"` \| `"verbose"`\>

Defined in: [packages/listr2/src/index.ts:139](https://github.com/Xunnamius/rejoinder/blob/4cddbaeba0007cab4d0e7e1b232deae71d9b1fd0/packages/listr2/src/index.ts#L139)

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
