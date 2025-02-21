[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / decorateWithTagSupport

# Function: decorateWithTagSupport()

> **decorateWithTagSupport**\<`T`\>(`fn`, `trapdoorArgsMinLength`): [`WithTagSupport`](../type-aliases/WithTagSupport.md)\<`T`\>

Defined in: [src/internal.ts:319](https://github.com/Xunnamius/rejoinder/blob/ca03dc95b439565d6c2438e8d0f7697514c85819/src/internal.ts#L319)

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
