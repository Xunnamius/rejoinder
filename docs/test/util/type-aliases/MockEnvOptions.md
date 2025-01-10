[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [test/util](../README.md) / MockEnvOptions

# Type Alias: MockEnvOptions

> **MockEnvOptions**: `object`

Defined in: [test/util.ts:15](https://github.com/Xunnamius/rejoinder/blob/8a503ebeed2689d0efaa12692a8cdaf933b5902d/test/util.ts#L15)

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
