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

### 🏗️ Patch rejoinder[@1.2.2][8] (2025-01-20)

#### ⚙️ Build System

- **package:** update @-xun/symbiote to 2.14.3 ([f37c737][9])
- Regenerate assets ([d837f2c][10])

<br />

### 🏗️ Patch rejoinder[@1.2.1][11] (2025-01-16)

#### 🪄 Fixes

- **src:** ensure loggers (not debuggers) never use banned ansi colors ([8fff50d][12])

<br />

## rejoinder[@1.1.0][13] (2025-01-10)

### ✨ Features

- Split internals from primary exports (available at `rejoinder/internal`) ([8a503eb][14])

<br />

### 🏗️ Patch rejoinder[@1.1.1][15] (2025-01-11)

#### ⚙️ Build System

- **babel:** break other dependency cycle between symbiote and rejoinder during build step ([3a2647a][16])
- Be consistent in use of "pre" vs "post" npm-install script naming ([4f034b1][17])
- **package:** add pre-npm-install script to break symbiote <=> rejoinder circular dependency ([6425499][18])
- **package:** skip lint task during release for now due to pre-npm-install side effects ([9223482][19])
- **package:** use --no-parallel during release process ([ecacc28][20])
- Regenerate assets ([78424fa][21])

<br />

## rejoinder[@1.0.0][22] (2025-01-10)

### 💥 BREAKING CHANGES 💥

- Jump to 1.0.0

### ⚙️ Build System

- **rejoinder:** jump to 1.0.0 ([49f5a5b][23])

## rejoinder[@0.3.21][24] (2025-01-09)

#### ⚙️ Build System

- **rejoinder:** split off listr2 functionality from primary package ([1d93349][25])

## rejoinder[@0.3.20][26] (2020-09-16)

## rejoinder[@0.3.18][27] (2020-09-15)

## rejoinder\@0.3.17 (2020-05-15)

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.1.1...rejoinder@1.2.0
[4]: https://github.com/Xunnamius/rejoinder/commit/48ca5ed758cd58ac94fb3124e2a594da1d2a7a3a
[5]: https://github.com/Xunnamius/rejoinder/commit/a8fc893bb23117400a376d2641b297eb2199956b
[6]: https://github.com/Xunnamius/rejoinder/commit/b10e6fc514367aef02468efe7382c2a09b7d45d5
[7]: https://github.com/Xunnamius/rejoinder/commit/571041bf4746363a1355f6eb2e03d6c31e5b0a18
[8]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.2.1...rejoinder@1.2.2
[9]: https://github.com/Xunnamius/rejoinder/commit/f37c737d9e65ca1a5c6439eb64cd6b1e3f022245
[10]: https://github.com/Xunnamius/rejoinder/commit/d837f2cf51d0f744b1acb9f03c50dbfbe4361561
[11]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.2.0...rejoinder@1.2.1
[12]: https://github.com/Xunnamius/rejoinder/commit/8fff50d663840973b506f42d097ba932988f893a
[13]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.0.0...rejoinder@1.1.0
[14]: https://github.com/Xunnamius/rejoinder/commit/8a503ebeed2689d0efaa12692a8cdaf933b5902d
[15]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.1.0...rejoinder@1.1.1
[16]: https://github.com/Xunnamius/rejoinder/commit/3a2647a4383d23c44984f5fba72936f803375d01
[17]: https://github.com/Xunnamius/rejoinder/commit/4f034b13c055cd89d409e657a782736ffce01aee
[18]: https://github.com/Xunnamius/rejoinder/commit/64254992295ef6f5190b0afba24212fdd92feacb
[19]: https://github.com/Xunnamius/rejoinder/commit/9223482982798f7556a4daad0ef1201567959c38
[20]: https://github.com/Xunnamius/rejoinder/commit/ecacc284cc93a112a5ebdd9865e0c2198aeab5d2
[21]: https://github.com/Xunnamius/rejoinder/commit/78424fa8f7badb679969f17dc434d2444f557d0d
[22]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@0.3.21...rejoinder@1.0.0
[23]: https://github.com/Xunnamius/rejoinder/commit/49f5a5b6bdfa22c9d737f729307f17e76e106dd5
[24]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@0.3.20...rejoinder@0.3.21
[25]: https://github.com/Xunnamius/rejoinder/commit/1d93349ce956b897a64948edbbd692d6e79bc22d
[26]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@0.3.19...rejoinder@0.3.20
[27]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@0.3.17...rejoinder@0.3.18
