# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## rejoinder[@1.2.0][3] (2025-01-16)

### ✨ Features

- **src:** export `get$instancesKeys` from rejoinder/internal; rely on `enabled` propagation ([48ca5ed][4])

### 🪄 Fixes

- **packages/debug:** no longer export `extendedDebuggerSubInstanceProperties` ([a8fc893][5])

### ⚙️ Build System

- **cycle-breaker:** ensure rejoinder\~dev receives its own copy of @-xun/debug\~dev ([b10e6fc][6])
- **release:** re-apply cycle-breaker patches after xrelease un-applies them ([571041b][7])

<br />

### 🏗️ Patch rejoinder[@1.2.3][8] (2025-01-25)

#### 🪄 Fixes

- Ensure the `ExtendedLogger` returned by `extend()` inherits its parent's `log` function ([6364d65][9])

<br />

### 🏗️ Patch rejoinder[@1.2.2][10] (2025-01-20)

#### ⚙️ Build System

- **package:** update @-xun/symbiote to 2.14.3 ([f37c737][11])
- Regenerate assets ([d837f2c][12])

<br />

### 🏗️ Patch rejoinder[@1.2.1][13] (2025-01-16)

#### 🪄 Fixes

- **src:** ensure loggers (not debuggers) never use banned ansi colors ([8fff50d][14])

<br />

## rejoinder[@1.1.0][15] (2025-01-10)

### ✨ Features

- Split internals from primary exports (available at `rejoinder/internal`) ([8a503eb][16])

<br />

### 🏗️ Patch rejoinder[@1.1.1][17] (2025-01-11)

#### ⚙️ Build System

- **babel:** break other dependency cycle between symbiote and rejoinder during build step ([3a2647a][18])
- Be consistent in use of "pre" vs "post" npm-install script naming ([4f034b1][19])
- **package:** add pre-npm-install script to break symbiote <=> rejoinder circular dependency ([6425499][20])
- **package:** skip lint task during release for now due to pre-npm-install side effects ([9223482][21])
- **package:** use --no-parallel during release process ([ecacc28][22])
- Regenerate assets ([78424fa][23])

<br />

## rejoinder[@1.0.0][24] (2025-01-10)

### 💥 BREAKING CHANGES 💥

- Jump to 1.0.0

### ⚙️ Build System

- **rejoinder:** jump to 1.0.0 ([49f5a5b][25])

## rejoinder[@0.3.21][26] (2025-01-09)

#### ⚙️ Build System

- **rejoinder:** split off listr2 functionality from primary package ([1d93349][27])

## rejoinder[@0.3.20][28] (2020-09-16)

## rejoinder[@0.3.18][29] (2020-09-15)

## rejoinder\@0.3.17 (2020-05-15)

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.1.1...rejoinder@1.2.0
[4]: https://github.com/Xunnamius/rejoinder/commit/48ca5ed758cd58ac94fb3124e2a594da1d2a7a3a
[5]: https://github.com/Xunnamius/rejoinder/commit/a8fc893bb23117400a376d2641b297eb2199956b
[6]: https://github.com/Xunnamius/rejoinder/commit/b10e6fc514367aef02468efe7382c2a09b7d45d5
[7]: https://github.com/Xunnamius/rejoinder/commit/571041bf4746363a1355f6eb2e03d6c31e5b0a18
[8]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.2.2...rejoinder@1.2.3
[9]: https://github.com/Xunnamius/rejoinder/commit/6364d654a78668a6aba3808c40b450fcc2389353
[10]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.2.1...rejoinder@1.2.2
[11]: https://github.com/Xunnamius/rejoinder/commit/f37c737d9e65ca1a5c6439eb64cd6b1e3f022245
[12]: https://github.com/Xunnamius/rejoinder/commit/d837f2cf51d0f744b1acb9f03c50dbfbe4361561
[13]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.2.0...rejoinder@1.2.1
[14]: https://github.com/Xunnamius/rejoinder/commit/8fff50d663840973b506f42d097ba932988f893a
[15]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.0.0...rejoinder@1.1.0
[16]: https://github.com/Xunnamius/rejoinder/commit/8a503ebeed2689d0efaa12692a8cdaf933b5902d
[17]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.1.0...rejoinder@1.1.1
[18]: https://github.com/Xunnamius/rejoinder/commit/3a2647a4383d23c44984f5fba72936f803375d01
[19]: https://github.com/Xunnamius/rejoinder/commit/4f034b13c055cd89d409e657a782736ffce01aee
[20]: https://github.com/Xunnamius/rejoinder/commit/64254992295ef6f5190b0afba24212fdd92feacb
[21]: https://github.com/Xunnamius/rejoinder/commit/9223482982798f7556a4daad0ef1201567959c38
[22]: https://github.com/Xunnamius/rejoinder/commit/ecacc284cc93a112a5ebdd9865e0c2198aeab5d2
[23]: https://github.com/Xunnamius/rejoinder/commit/78424fa8f7badb679969f17dc434d2444f557d0d
[24]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@0.3.21...rejoinder@1.0.0
[25]: https://github.com/Xunnamius/rejoinder/commit/49f5a5b6bdfa22c9d737f729307f17e76e106dd5
[26]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@0.3.20...rejoinder@0.3.21
[27]: https://github.com/Xunnamius/rejoinder/commit/1d93349ce956b897a64948edbbd692d6e79bc22d
[28]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@0.3.19...rejoinder@0.3.20
[29]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@0.3.17...rejoinder@0.3.18
