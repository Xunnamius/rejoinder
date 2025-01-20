[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / WithTagSupport

# Type Alias: WithTagSupport\<T, Optional\>

> **WithTagSupport**\<`T`, `Optional`\>: (...`args`) => `ReturnType`\<`T`\> \| `undefined` & `{ [P in keyof T]: T[P] }`

Defined in: [src/internal.ts:38](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L38)

Decorate a function-object `T` with an initial potentially-optional `tags`
parameter without excluding any of its non-function own object properties.

## Type Parameters

• **T** *extends* (...`args`) => `any`

• **Optional** = `true`
