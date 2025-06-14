[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / decorateWithTagSupport

# Function: decorateWithTagSupport()

> **decorateWithTagSupport**\<`T`\>(`fn`, `trapdoorArgsMinLength`): [`WithTagSupport`](../type-aliases/WithTagSupport.md)\<`T`\>

Defined in: [src/internal.ts:318](https://github.com/Xunnamius/rejoinder/blob/2e193401f811190578a6daed325a2ddce540538d/src/internal.ts#L318)

Allows logging to be disabled via tags at the fine-grain message level. Set
`trapdoorArgLength` to the number of params necessary to trigger denylisting.

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### fn

`T`

### trapdoorArgsMinLength

`number`

## Returns

[`WithTagSupport`](../type-aliases/WithTagSupport.md)\<`T`\>
