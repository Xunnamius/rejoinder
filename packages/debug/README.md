<!-- symbiote-template-region-start 1 -->

<p align="center" width="100%">
  <img width="200" src="https://raw.githubusercontent.com/Xunnamius/rejoinder/refs/heads/main/packages/debug/logo.png">
</p>

<p align="center" width="100%">
<!-- symbiote-template-region-end -->
Extends the hyper-popular <code>debug</code> package with several convenience methods
<!-- symbiote-template-region-start 2 -->
</p>

<hr />

<div align="center">

[![Black Lives Matter!][x-badge-blm-image]][x-badge-blm-link]
[![Last commit timestamp][x-badge-lastcommit-image]][x-badge-repo-link]
[![Codecov][x-badge-codecov-image]][x-badge-codecov-link]
[![Source license][x-badge-license-image]][x-badge-license-link]
[![Uses Semantic Release!][x-badge-semanticrelease-image]][x-badge-semanticrelease-link]

[![NPM version][x-badge-npm-image]][x-badge-npm-link]
[![Monthly Downloads][x-badge-downloads-image]][x-badge-downloads-link]

</div>

<br />

# @-xun/debug

<!-- symbiote-template-region-end -->

`@-xun/debug` extends debugger instances from the hyper popular `debug` package
with several convenience methods.

This package is the workhorse on which [`rejoinder`][1] is built.

<!-- symbiote-template-region-start 3 -->

---

<!-- remark-ignore-start -->
<!-- symbiote-template-region-end -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [Usage](#usage)
  - [Special `process.env.DEBUG` Activation Functionality](#special-processenvdebug-activation-functionality)
- [Appendix](#appendix)
  - [Published Package Details](#published-package-details)
  - [License](#license)
- [Contributing and Support](#contributing-and-support)
  - [Contributors](#contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- symbiote-template-region-start 4 -->
<!-- remark-ignore-end -->

<br />

## Install

<!-- symbiote-template-region-end -->

To install:

```shell
npm install @-xun/debug
```

## Usage

<!-- TODO -->

TODO

### Special `process.env.DEBUG` Activation Functionality

In older versions of the `debug` package's functionality, `DEBUG='namespace*'`
would activate the `namespace:sub-namespace` debugger but not the `namespace`
debugger. `@-xun/debug` worked around this DX issue by appending a colon to the
so-called "root namespace" (i.e. `namespace` in these examples) at creation
time, which ensured `DEBUG='namespace*'` activated all `namespace` debuggers and
sub-debuggers.

To maintain functional parity with `debug`'s activation functionality,
`@-xun/debug` appends a colon to the root namespace in `DEBUG` strings.
`@-xun/debug` also splits on space/comma and applies the same transform to each
split-off namespace string, including negated namespace strings (e.g.
`DEBUG='*,-namespace'`).

This means `DEBUG='namespace*'` and `DEBUG='namespace:*'` (as well as
`DEBUG='*,-namespace*'` and `DEBUG='*,-namespace:*'`) have identical meanings to
`@-xun/debug`, but _not_ to the upstream `debug` package.

**Note that this does NOT mean `DEBUG='namespace:sub-namespace*'` and
`DEBUG='namespace:sub-namespace:*'` have identical meanings. They do not.**

> [!NOTE]
>
> As of 2025, it seems `debug` has fixed this DX issue upstream. What is
> described above is no longer a workaround; instead, the extra-colon root
> namespace is just a feature of `@-xun/debug` now 😄

<!-- symbiote-template-region-start 5 -->

## Appendix

<!-- symbiote-template-region-end -->

Further documentation can be found under [`docs/`][x-repo-docs].

<!-- TODO: additional appendix sections here -->
<!-- symbiote-template-region-start 6 -->

### Published Package Details

This is a [CJS2 package][x-pkg-cjs-mojito] with statically-analyzable exports
built by Babel for use in Node.js versions that are not end-of-life. For
TypeScript users, this package supports both `"Node10"` and `"Node16"` module
resolution strategies.

<!-- symbiote-template-region-end -->
<!-- TODO: additional package details here -->
<!-- symbiote-template-region-start 7 -->

<details><summary>Expand details</summary>

That means both CJS2 (via `require(...)`) and ESM (via `import { ... } from ...`
or `await import(...)`) source will load this package from the same entry points
when using Node. This has several benefits, the foremost being: less code
shipped/smaller package size, avoiding [dual package
hazard][x-pkg-dual-package-hazard] entirely, distributables are not
packed/bundled/uglified, a drastically less complex build process, and CJS
consumers aren't shafted.

Each entry point (i.e. `ENTRY`) in [`package.json`'s
`exports[ENTRY]`][x-repo-package-json] object includes one or more [export
conditions][x-pkg-exports-conditions]. These entries may or may not include: an
[`exports[ENTRY].types`][x-pkg-exports-types-key] condition pointing to a type
declaration file for TypeScript and IDEs, a
[`exports[ENTRY].module`][x-pkg-exports-module-key] condition pointing to
(usually ESM) source for Webpack/Rollup, a `exports[ENTRY].node` and/or
`exports[ENTRY].default` condition pointing to (usually CJS2) source for Node.js
`require`/`import` and for browsers and other environments, and [other
conditions][x-pkg-exports-conditions] not enumerated here. Check the
[package.json][x-repo-package-json] file to see which export conditions are
supported.

Note that, regardless of the [`{ "type": "..." }`][x-pkg-type] specified in
[`package.json`][x-repo-package-json], any JavaScript files written in ESM
syntax (including distributables) will always have the `.mjs` extension. Note
also that [`package.json`][x-repo-package-json] may include the
[`sideEffects`][x-pkg-side-effects-key] key, which is almost always `false` for
optimal [tree shaking][x-pkg-tree-shaking] where appropriate.

<!-- symbiote-template-region-end -->
<!-- TODO: additional package details here -->
<!-- symbiote-template-region-start 8 -->

</details>

### License

<!-- symbiote-template-region-end -->

See [LICENSE][x-repo-license].

<!-- TODO: additional license information and/or sections here -->
<!-- symbiote-template-region-start 9 -->

## Contributing and Support

**[New issues][x-repo-choose-new-issue] and [pull requests][x-repo-pr-compare]
are always welcome and greatly appreciated! 🤩** Just as well, you can [star 🌟
this project][x-badge-repo-link] to let me know you found it useful! ✊🏿 Or [buy
me a beer][x-repo-sponsor], I'd appreciate it. Thank you!

See [CONTRIBUTING.md][x-repo-contributing] and [SUPPORT.md][x-repo-support] for
more information.

<!-- symbiote-template-region-end -->
<!-- TODO: additional contribution/support sections here -->
<!-- symbiote-template-region-start 10 -->

### Contributors

<!-- symbiote-template-region-end -->
<!-- symbiote-template-region-start root-package-only -->
<!-- (section elided by symbiote) -->
<!-- symbiote-template-region-end -->
<!-- symbiote-template-region-start workspace-package-only -->

See the [table of contributors][x-repo-contributors].

<!-- symbiote-template-region-end -->

[x-badge-blm-image]: https://xunn.at/badge-blm 'Join the movement!'
[x-badge-blm-link]: https://xunn.at/donate-blm
[x-badge-codecov-image]:
  https://img.shields.io/codecov/c/github/Xunnamius/rejoinder/main?style=flat-square&token=HWRIOBAAPW&flag=package.main_debug
  'Is this package well-tested?'
[x-badge-codecov-link]: https://codecov.io/gh/Xunnamius/rejoinder
[x-badge-downloads-image]:
  https://img.shields.io/npm/dm/@-xun/debug?style=flat-square
  'Number of times this package has been downloaded per month'
[x-badge-downloads-link]: https://npmtrends.com/@-xun/debug
[x-badge-lastcommit-image]:
  https://img.shields.io/github/last-commit/Xunnamius/rejoinder?style=flat-square
  'Latest commit timestamp'
[x-badge-license-image]:
  https://img.shields.io/npm/l/@-xun/debug?style=flat-square
  "This package's source license"
[x-badge-license-link]: https://github.com/Xunnamius/rejoinder/blob/main/LICENSE
[x-badge-npm-image]:
  https://xunn.at/npm-pkg-version/@-xun/debug
  'Install this package using npm or yarn!'
[x-badge-npm-link]: https://npm.im/@-xun/debug
[x-badge-repo-link]: https://github.com/Xunnamius/rejoinder
[x-badge-semanticrelease-image]:
  https://xunn.at/badge-semantic-release
  'This repo practices continuous integration and deployment!'
[x-badge-semanticrelease-link]:
  https://github.com/semantic-release/semantic-release
[x-pkg-cjs-mojito]:
  https://dev.to/jakobjingleheimer/configuring-commonjs-es-modules-for-nodejs-12ed#publish-only-a-cjs-distribution-with-property-exports
[x-pkg-dual-package-hazard]:
  https://nodejs.org/api/packages.html#dual-package-hazard
[x-pkg-exports-conditions]:
  https://webpack.js.org/guides/package-exports#reference-syntax
[x-pkg-exports-module-key]:
  https://webpack.js.org/guides/package-exports#providing-commonjs-and-esm-version-stateless
[x-pkg-exports-types-key]:
  https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta#packagejson-exports-imports-and-self-referencing
[x-pkg-side-effects-key]:
  https://webpack.js.org/guides/tree-shaking#mark-the-file-as-side-effect-free
[x-pkg-tree-shaking]: https://webpack.js.org/guides/tree-shaking
[x-pkg-type]:
  https://github.com/nodejs/node/blob/8d8e06a345043bec787e904edc9a2f5c5e9c275f/doc/api/packages.md#type
[x-repo-choose-new-issue]:
  https://github.com/Xunnamius/rejoinder/issues/new/choose
[x-repo-contributing]: /CONTRIBUTING.md
[x-repo-contributors]: /README.md#contributors
[x-repo-docs]: docs
[x-repo-license]: ./LICENSE
[x-repo-package-json]: package.json
[x-repo-pr-compare]: https://github.com/Xunnamius/rejoinder/compare
[x-repo-sponsor]: https://github.com/sponsors/Xunnamius
[x-repo-support]: /.github/SUPPORT.md
[1]: https://github.com/Xunnamius/rejoinder#readme
