# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/debug[@1.1.0][3] (2025-01-16)

### ✨ Features

- **packages/debug:** ensure mutations to `enabled` propagate to pre-extended sub-instances ([f9090a5][4])

### 🪄 Fixes

- **packages/debug:** no longer export `extendedDebuggerSubInstanceProperties` ([a8fc893][5])

### ⚙️ Build System

- Add `--no-parallel` to release script ([36d9b15][6])
- **cycle-breaker:** ensure rejoinder\~dev receives its own copy of @-xun/debug\~dev ([b10e6fc][7])
- **release:** re-apply cycle-breaker patches after xrelease un-applies them ([571041b][8])

<br />

### 🏗️ Patch @-xun/debug[@1.1.3][9] (2025-01-25)

#### ⚙️ Build System

- **packages/debug:** update documentation commentary ([62dfac9][10])

<br />

### 🏗️ Patch @-xun/debug[@1.1.2][11] (2025-01-25)

#### 🪄 Fixes

- **packages/debug:** ensure output functions print entire array and string values ([425d724][12])

<br />

### 🏗️ Patch @-xun/debug[@1.1.1][13] (2025-01-20)

#### ⚙️ Build System

- Regenerate assets ([d837f2c][14])

<br />

## @-xun/debug[@1.0.0][15] (2025-01-09)

### ⚙️ Build System

- **packages/debug:** break off @-xun/debug from symbiote as standalone package ([5710193][16])

<br />

### 🏗️ Patch @-xun/debug[@1.0.4][17] (2025-01-11)

#### ⚙️ Build System

- **babel:** break other dependency cycle between symbiote and rejoinder during build step ([3a2647a][18])

<br />

### 🏗️ Patch @-xun/debug[@1.0.3][19] (2025-01-11)

#### ⚙️ Build System

- Use proper codecov package flag for badge link ([5526095][20])

<br />

### 🏗️ Patch @-xun/debug[@1.0.2][21] (2025-01-11)

#### ⚙️ Build System

- Regenerate assets ([78424fa][22])

<br />

### 🏗️ Patch @-xun/debug[@1.0.1][23] (2025-01-10)

#### ⚙️ Build System

- **packages/debug:** publish with proper logo link ([889da56][24])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/rejoinder/compare/@-xun/debug@1.0.4...@-xun/debug@1.1.0
[4]: https://github.com/Xunnamius/rejoinder/commit/f9090a50954e176acad599810313bd267fd1ae24
[5]: https://github.com/Xunnamius/rejoinder/commit/a8fc893bb23117400a376d2641b297eb2199956b
[6]: https://github.com/Xunnamius/rejoinder/commit/36d9b15a656e1eed5a50cdfe7fe502a22f0aa57f
[7]: https://github.com/Xunnamius/rejoinder/commit/b10e6fc514367aef02468efe7382c2a09b7d45d5
[8]: https://github.com/Xunnamius/rejoinder/commit/571041bf4746363a1355f6eb2e03d6c31e5b0a18
[9]: https://github.com/Xunnamius/rejoinder/compare/@-xun/debug@1.1.2...@-xun/debug@1.1.3
[10]: https://github.com/Xunnamius/rejoinder/commit/62dfac9fe9201e2d1e0e6b073b75bb67ebe400ba
[11]: https://github.com/Xunnamius/rejoinder/compare/@-xun/debug@1.1.1...@-xun/debug@1.1.2
[12]: https://github.com/Xunnamius/rejoinder/commit/425d724aa61953ac3a112f463314ea824384837e
[13]: https://github.com/Xunnamius/rejoinder/compare/@-xun/debug@1.1.0...@-xun/debug@1.1.1
[14]: https://github.com/Xunnamius/rejoinder/commit/d837f2cf51d0f744b1acb9f03c50dbfbe4361561
[15]: https://github.com/Xunnamius/rejoinder/compare/@-xun/debug@0.0.0-init...@-xun/debug@1.0.0
[16]: https://github.com/Xunnamius/rejoinder/commit/5710193dfcb9e7999fcf2a7c79680d1c61726378
[17]: https://github.com/Xunnamius/rejoinder/compare/@-xun/debug@1.0.3...@-xun/debug@1.0.4
[18]: https://github.com/Xunnamius/rejoinder/commit/3a2647a4383d23c44984f5fba72936f803375d01
[19]: https://github.com/Xunnamius/rejoinder/compare/@-xun/debug@1.0.2...@-xun/debug@1.0.3
[20]: https://github.com/Xunnamius/rejoinder/commit/5526095585c560786bb4716fe2181814ff33c2ac
[21]: https://github.com/Xunnamius/rejoinder/compare/@-xun/debug@1.0.1...@-xun/debug@1.0.2
[22]: https://github.com/Xunnamius/rejoinder/commit/78424fa8f7badb679969f17dc434d2444f557d0d
[23]: https://github.com/Xunnamius/rejoinder/compare/@-xun/debug@1.0.0...@-xun/debug@1.0.1
[24]: https://github.com/Xunnamius/rejoinder/commit/889da569331993385da96d349005064821723a46
