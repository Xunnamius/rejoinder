[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / WithTagSupport

# Type Alias: WithTagSupport\<T, Optional\>

> **WithTagSupport**\<`T`, `Optional`\>: (...`args`) => `ReturnType`\<`T`\> \| `undefined` & `{ [P in keyof T]: T[P] }`

Defined in: [src/internal.ts:38](https://github.com/Xunnamius/rejoinder/blob/ca03dc95b439565d6c2438e8d0f7697514c85819/src/internal.ts#L38)

Decorate a function-object `T` with an initial potentially-optional `tags`
parameter without excluding any of its non-function own object properties.

## Type Parameters

• **T** *extends* (...`args`) => `any`

• **Optional** = `true`
