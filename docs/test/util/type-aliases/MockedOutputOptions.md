[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [test/util](../README.md) / MockedOutputOptions

# Type Alias: MockedOutputOptions

> **MockedOutputOptions**: `object`

Defined in: [test/util.ts:49](https://github.com/Xunnamius/rejoinder/blob/8a503ebeed2689d0efaa12692a8cdaf933b5902d/test/util.ts#L49)

## Type declaration

### passthrough?

> `optional` **passthrough**: (`"log"` \| `"warn"` \| `"error"` \| `"info"` \| `"stdout"` \| `"stderr"`)[]

Call `::mockRestore` on one or more output functions currently being spied
upon.

### passthroughOutputIfDebugging?

> `optional` **passthroughOutputIfDebugging**: `boolean`

If `true`, whenever `process.env.DEBUG` is present, output functions will
still be spied on but their implementations will not be mocked, allowing
debug output to make it to the screen.

#### Default

```ts
true
```
