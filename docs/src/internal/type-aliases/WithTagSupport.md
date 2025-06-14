[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / WithTagSupport

# Type Alias: WithTagSupport\<T, Optional\>

> **WithTagSupport**\<`T`, `Optional`\> = (...`args`) => `ReturnType`\<`T`\> \| `undefined` & `{ [P in keyof T]: T[P] }`

Defined in: [src/internal.ts:37](https://github.com/Xunnamius/rejoinder/blob/2e193401f811190578a6daed325a2ddce540538d/src/internal.ts#L37)

Decorate a function-object `T` with an initial potentially-optional `tags`
parameter without excluding any of its non-function own object properties.

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

### Optional

`Optional` = `true`
