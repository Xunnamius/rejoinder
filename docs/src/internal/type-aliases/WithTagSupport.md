[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / WithTagSupport

# Type Alias: WithTagSupport\<T, Optional\>

> **WithTagSupport**\<`T`, `Optional`\>: (...`args`) => `ReturnType`\<`T`\> \| `undefined` & `{ [P in keyof T]: T[P] }`

Defined in: [src/internal.ts:37](https://github.com/Xunnamius/rejoinder/blob/da115820e8e078fc8d5f9295b571a8c5d1e5f9e7/src/internal.ts#L37)

Decorate a function-object `T` with an initial potentially-optional `tags`
parameter without excluding any of its non-function own object properties.

## Type Parameters

• **T** *extends* (...`args`) => `any`

• **Optional** = `true`
