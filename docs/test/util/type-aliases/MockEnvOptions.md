[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [test/util](../README.md) / MockEnvOptions

# Type Alias: MockEnvOptions

> **MockEnvOptions**: `object`

Defined in: [test/util.ts:15](https://github.com/Xunnamius/rejoinder/blob/64011a11a45735665b3ce75107a37b187f35af77/test/util.ts#L15)

## Type declaration

### replace?

> `optional` **replace**: `boolean`

By default, the `process.env` object is emptied and re-hydrated with
`newEnv`. Setting `replace` to `false` will cause `newEnv` to be appended
instead

#### Default

```ts
true
```
