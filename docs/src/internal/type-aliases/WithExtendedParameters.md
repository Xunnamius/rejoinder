[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / WithExtendedParameters

# Type Alias: WithExtendedParameters\<T, Optional\>

> **WithExtendedParameters**\<`T`, `Optional`\> = `Optional` *extends* `true` ? \[`string`[], `...Parameters<T>`\] : \[`string`[], `...Parameters<T>`\]

Defined in: [src/internal.ts:52](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L52)

Decorate a function `T` with an initial potentially-optional `tags`
parameter.

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

### Optional

`Optional` = `true`
