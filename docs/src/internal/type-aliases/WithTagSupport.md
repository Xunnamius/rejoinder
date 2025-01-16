[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / WithTagSupport

# Type Alias: WithTagSupport\<T, Optional\>

> **WithTagSupport**\<`T`, `Optional`\>: (...`args`) => `ReturnType`\<`T`\> \| `undefined` & `{ [P in keyof T]: T[P] }`

Defined in: [src/internal.ts:38](https://github.com/Xunnamius/rejoinder/blob/8fff50d663840973b506f42d097ba932988f893a/src/internal.ts#L38)

Decorate a function-object `T` with an initial potentially-optional `tags`
parameter without excluding any of its non-function own object properties.

## Type Parameters

• **T** *extends* (...`args`) => `any`

• **Optional** = `true`
