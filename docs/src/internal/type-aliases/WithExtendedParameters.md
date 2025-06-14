[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / WithExtendedParameters

# Type Alias: WithExtendedParameters\<T, Optional\>

> **WithExtendedParameters**\<`T`, `Optional`\> = `Optional` *extends* `true` ? \[`string`[], `...Parameters<T>`\] : \[`string`[], `...Parameters<T>`\]

Defined in: [src/internal.ts:28](https://github.com/Xunnamius/rejoinder/blob/4c31d61cc2d97962fe915faa47504a4378c59057/src/internal.ts#L28)

Decorate a function `T` with an initial potentially-optional `tags`
parameter.

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

### Optional

`Optional` = `true`
