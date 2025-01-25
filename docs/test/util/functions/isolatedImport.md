[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [test/util](../README.md) / isolatedImport

# Function: isolatedImport()

> **isolatedImport**\<`T`\>(`args`): `T`

Defined in: [test/util.ts:189](https://github.com/Xunnamius/rejoinder/blob/f0345f969b3e8ccfc9a4dc96e3a670ff5e335f69/test/util.ts#L189)

Performs a module import as if it were being imported for the first time.

Note that this function breaks the "require caching" expectation of Node.js
modules. Problems can arise, for example, when closing an app-wide database
connection in your test cleanup phase and expecting it to close for the
isolated module too. In this case, the isolated module has its own isolated
"app-wide" connection that would not actually be closed and could cause your
test to hang unexpectedly, even when all tests pass.

## Type Parameters

• **T** = `unknown`

## Parameters

### args

#### path

`string`

Path to the module to import. Module resolution is handled by `require`.

#### useDefault

`boolean`

By default, if `module.__esModule === true`, the default export will be
returned instead. Use `useDefault` to override this behavior in either
direction.

## Returns

`T`
