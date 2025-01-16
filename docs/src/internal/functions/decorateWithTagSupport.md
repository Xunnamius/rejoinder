[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / decorateWithTagSupport

# Function: decorateWithTagSupport()

> **decorateWithTagSupport**\<`T`\>(`fn`, `trapdoorArgsMinLength`): [`WithTagSupport`](../type-aliases/WithTagSupport.md)\<`T`\>

Defined in: [src/internal.ts:313](https://github.com/Xunnamius/rejoinder/blob/8fff50d663840973b506f42d097ba932988f893a/src/internal.ts#L313)

Allows logging to be disabled via tags at the fine-grain message level. Set
`trapdoorArgLength` to the number of params necessary to trigger denylisting.

## Type Parameters

• **T** *extends* (...`args`) => `any`

## Parameters

### fn

`T`

### trapdoorArgsMinLength

`number`

## Returns

[`WithTagSupport`](../type-aliases/WithTagSupport.md)\<`T`\>
