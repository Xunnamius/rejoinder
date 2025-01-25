[**rejoinder-github-actions**](../../README.md)

***

[rejoinder-github-actions](../../README.md) / [index](../README.md) / createGithubLogger

# Function: createGithubLogger()

> **createGithubLogger**(`__namedParameters`): `ExtendedLogger`

Defined in: [index.ts:27](https://github.com/Xunnamius/rejoinder/blob/723518544e7f253d6d1f0e9b48c9dfebe20bab57/packages/github/src/index.ts#L27)

Create and return new set of logger instances.

Note that the `::newline` method of these logger instances is a no-op.

Also note that, unlike other loggers, calling `::extend` will not return an
instance with a `::log` function inherited from its parent; a brand new
`::log` function is generated instead.

The pre-extended sub-instances of the returned logger support "titles," which
correspond to GitHub Actions output titles. Set them by providing input of
the form `"title=...::"`, e.g.:

```
logger.warn("title=Output For Project X::Real output here!");
```

## Parameters

### \_\_namedParameters

#### namespace

`string`

The namespace of the logger. The namespace must be a valid [`debug`
namespace](https://npm.im/debug#namespace-colors).

**See**

https://npm.im/debug#namespace-colors

## Returns

`ExtendedLogger`
