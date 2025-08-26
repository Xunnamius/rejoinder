[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / decorateWithTagSupport

# Function: decorateWithTagSupport()

> **decorateWithTagSupport**\<`T`\>(`fn`, `trapdoorArgsMinLength`): [`WithTagSupport`](../type-aliases/WithTagSupport.md)\<`T`\>

Defined in: [src/internal.ts:346](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L346)

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
