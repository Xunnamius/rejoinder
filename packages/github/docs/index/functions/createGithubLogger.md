[**rejoinder-github-actions**](../../README.md)

***

[rejoinder-github-actions](../../README.md) / [index](../README.md) / createGithubLogger

# Function: createGithubLogger()

> **createGithubLogger**(`__namedParameters`): `ExtendedLogger`

Defined in: [index.ts:21](https://github.com/Xunnamius/rejoinder/blob/1eb0ed5e4c5d24570a225edb079ddb80bfe7b814/packages/github/src/index.ts#L21)

Create and return new set of logger instances.

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
