[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / WithExtendedParameters

# Type Alias: WithExtendedParameters\<T, Optional\>

> **WithExtendedParameters**\<`T`, `Optional`\> = `Optional` *extends* `true` ? \[`string`[], `...Parameters<T>`\] : \[`string`[], `...Parameters<T>`\]

Defined in: [src/internal.ts:26](https://github.com/Xunnamius/rejoinder/blob/2e193401f811190578a6daed325a2ddce540538d/src/internal.ts#L26)

Decorate a function `T` with an initial potentially-optional `tags`
parameter.

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

### Optional

`Optional` = `true`
