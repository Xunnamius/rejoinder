# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## rejoinder[@2.0.0][3] (2025-06-14)

### 💥 BREAKING CHANGES 💥

- **Namespace activation will once again perfectly mirror vanilla debug**

  Earlier versions of this package experimented with ways to separate the root namespace from the others. This change reverts those experiments entirely.

- Minimum supported node version is now 20.18.0

### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.43.0 ([05db0e9][4])
- **deps:** bump internal monorepo interdependencies to latest versions ([da16af5][5])
- **package:** drop support for node\@18 ([baf5c89][6])

### 🧙🏿 Refactored

- Remove broken "double-colon" namespace feature ([d9d4f37][7])

<br />

### 🏗️ Patch rejoinder[@2.0.1][8] (2025-06-14)

#### 🪄 Fixes

- Do not expose internal properties when exporting types ([f64c1e0][9])

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([7081d37][10])

<br />

## rejoinder[@1.2.0][11] (2025-01-16)

### ✨ Features

- **src:** export `get$instancesKeys` from rejoinder/internal; rely on `enabled` propagation ([48ca5ed][12])

### 🪄 Fixes

- **packages/debug:** no longer export `extendedDebuggerSubInstanceProperties` ([a8fc893][13])

### ⚙️ Build System

- **cycle-breaker:** ensure rejoinder\~dev receives its own copy of @-xun/debug\~dev ([b10e6fc][14])
- **release:** re-apply cycle-breaker patches after xrelease un-applies them ([571041b][15])

<br />

### 🏗️ Patch rejoinder[@1.2.5][16] (2025-02-21)

#### 🪄 Fixes

- Replace useage of `globalThis.console` with `node:console` ([03b3613][17])

<br />

### 🏗️ Patch rejoinder[@1.2.4][18] (2025-01-25)

#### 🪄 Fixes

- Use current logger function when `newline` is called ([bfc760b][19])

<br />

### 🏗️ Patch rejoinder[@1.2.3][20] (2025-01-25)

#### 🪄 Fixes

- Ensure the `ExtendedLogger` returned by `extend()` inherits its parent's `log` function ([6364d65][21])

<br />

### 🏗️ Patch rejoinder[@1.2.2][22] (2025-01-20)

#### ⚙️ Build System

- **package:** update @-xun/symbiote to 2.14.3 ([f37c737][23])
- Regenerate assets ([d837f2c][24])

<br />

### 🏗️ Patch rejoinder[@1.2.1][25] (2025-01-16)

#### 🪄 Fixes

- **src:** ensure loggers (not debuggers) never use banned ansi colors ([8fff50d][26])

<br />

## rejoinder[@1.1.0][27] (2025-01-10)

### ✨ Features

- Split internals from primary exports (available at `rejoinder/internal`) ([8a503eb][28])

<br />

### 🏗️ Patch rejoinder[@1.1.1][29] (2025-01-11)

#### ⚙️ Build System

- **babel:** break other dependency cycle between symbiote and rejoinder during build step ([3a2647a][30])
- Be consistent in use of "pre" vs "post" npm-install script naming ([4f034b1][31])
- **package:** add pre-npm-install script to break symbiote <=> rejoinder circular dependency ([6425499][32])
- **package:** skip lint task during release for now due to pre-npm-install side effects ([9223482][33])
- **package:** use --no-parallel during release process ([ecacc28][34])
- Regenerate assets ([78424fa][35])

<br />

## rejoinder[@1.0.0][36] (2025-01-10)

### 💥 BREAKING CHANGES 💥

- Jump to 1.0.0

### ⚙️ Build System

- **rejoinder:** jump to 1.0.0 ([49f5a5b][37])

## rejoinder[@0.3.21][38] (2025-01-09)

#### ⚙️ Build System

- **rejoinder:** split off listr2 functionality from primary package ([1d93349][39])

## rejoinder[@0.3.20][40] (2020-09-16)

## rejoinder[@0.3.18][41] (2020-09-15)

## rejoinder\@0.3.17 (2020-05-15)

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.2.5...rejoinder@2.0.0
[4]: https://github.com/Xunnamius/rejoinder/commit/05db0e97a8b00603265d509263fd30b7b4062bcb
[5]: https://github.com/Xunnamius/rejoinder/commit/da16af5949ab72de25a6f2682f5d9b378051bd92
[6]: https://github.com/Xunnamius/rejoinder/commit/baf5c89e66b1bdacf31ca37e80d78e8f1b048530
[7]: https://github.com/Xunnamius/rejoinder/commit/d9d4f378320c4405c80cb306d8174b752def9292
[8]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@2.0.0...rejoinder@2.0.1
[9]: https://github.com/Xunnamius/rejoinder/commit/f64c1e0c19bc97c588be2ae8d7b20734d4ed6719
[10]: https://github.com/Xunnamius/rejoinder/commit/7081d37c1950eeadab2857cc4cf50906196bfe99
[11]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.1.1...rejoinder@1.2.0
[12]: https://github.com/Xunnamius/rejoinder/commit/48ca5ed758cd58ac94fb3124e2a594da1d2a7a3a
[13]: https://github.com/Xunnamius/rejoinder/commit/a8fc893bb23117400a376d2641b297eb2199956b
[14]: https://github.com/Xunnamius/rejoinder/commit/b10e6fc514367aef02468efe7382c2a09b7d45d5
[15]: https://github.com/Xunnamius/rejoinder/commit/571041bf4746363a1355f6eb2e03d6c31e5b0a18
[16]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.2.4...rejoinder@1.2.5
[17]: https://github.com/Xunnamius/rejoinder/commit/03b3613ea5521daeec1921ccb4f8819f94b7098e
[18]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.2.3...rejoinder@1.2.4
[19]: https://github.com/Xunnamius/rejoinder/commit/bfc760b32795efc432b7155b8ae5fa0baca00ee5
[20]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.2.2...rejoinder@1.2.3
[21]: https://github.com/Xunnamius/rejoinder/commit/6364d654a78668a6aba3808c40b450fcc2389353
[22]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.2.1...rejoinder@1.2.2
[23]: https://github.com/Xunnamius/rejoinder/commit/f37c737d9e65ca1a5c6439eb64cd6b1e3f022245
[24]: https://github.com/Xunnamius/rejoinder/commit/d837f2cf51d0f744b1acb9f03c50dbfbe4361561
[25]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.2.0...rejoinder@1.2.1
[26]: https://github.com/Xunnamius/rejoinder/commit/8fff50d663840973b506f42d097ba932988f893a
[27]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.0.0...rejoinder@1.1.0
[28]: https://github.com/Xunnamius/rejoinder/commit/8a503ebeed2689d0efaa12692a8cdaf933b5902d
[29]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@1.1.0...rejoinder@1.1.1
[30]: https://github.com/Xunnamius/rejoinder/commit/3a2647a4383d23c44984f5fba72936f803375d01
[31]: https://github.com/Xunnamius/rejoinder/commit/4f034b13c055cd89d409e657a782736ffce01aee
[32]: https://github.com/Xunnamius/rejoinder/commit/64254992295ef6f5190b0afba24212fdd92feacb
[33]: https://github.com/Xunnamius/rejoinder/commit/9223482982798f7556a4daad0ef1201567959c38
[34]: https://github.com/Xunnamius/rejoinder/commit/ecacc284cc93a112a5ebdd9865e0c2198aeab5d2
[35]: https://github.com/Xunnamius/rejoinder/commit/78424fa8f7badb679969f17dc434d2444f557d0d
[36]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@0.3.21...rejoinder@1.0.0
[37]: https://github.com/Xunnamius/rejoinder/commit/49f5a5b6bdfa22c9d737f729307f17e76e106dd5
[38]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@0.3.20...rejoinder@0.3.21
[39]: https://github.com/Xunnamius/rejoinder/commit/1d93349ce956b897a64948edbbd692d6e79bc22d
[40]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@0.3.19...rejoinder@0.3.20
[41]: https://github.com/Xunnamius/rejoinder/compare/rejoinder@0.3.17...rejoinder@0.3.18
