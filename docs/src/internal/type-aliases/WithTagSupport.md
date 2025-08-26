[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / WithTagSupport

# Type Alias: WithTagSupport\<T, Optional\>

> **WithTagSupport**\<`T`, `Optional`\> = (...`args`) => `ReturnType`\<`T`\> \| `undefined` & `{ [P in keyof T]: T[P] }`

Defined in: [src/internal.ts:63](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L63)

Decorate a function-object `T` with an initial potentially-optional `tags`
parameter without excluding any of its non-function own object properties.

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

### Optional

`Optional` = `true`
