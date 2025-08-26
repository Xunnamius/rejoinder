# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## rejoinder-listr2[@2.1.0][3] (2025-08-24)

### ✨ Features

- **packages/listr2:** export `waitForListr2OutputReady` workaround ([52d6c59][4])

### ⚙️ Build System

- **deps:** bump core-js from 3.44.0 to 3.45.1 ([a7f33dc][5])
- **packages/listr2:** move `@-xun/debug` from devdeps to deps ([c2612ae][6])

<br />

### 🏗️ Patch rejoinder-listr2[@2.1.1][7] (2025-08-26)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([60581df][8])

<br />

## rejoinder-listr2[@2.0.0][9] (2025-06-14)

### 💥 BREAKING CHANGES 💥

- **Namespace activation will once again perfectly mirror vanilla debug**

  Earlier versions of this package experimented with ways to separate the root namespace from the others. This change reverts those experiments entirely.

- Minimum supported node version is now 20.18.0

### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.43.0 ([b01c9bc][10])
- **package:** drop support for node\@18 ([baf5c89][11])

### 🧙🏿 Refactored

- Remove broken "double-colon" namespace feature ([d9d4f37][12])

<br />

### 🏗️ Patch rejoinder-listr2[@2.0.2][13] (2025-07-10)

#### ⚙️ Build System

- **deps:** bump core-js from 3.43.0 to 3.44.0 ([3c7d2dd][14])
- **packages:** use sane values for peer dependencies ([b0bedaf][15])

<br />

### 🏗️ Patch rejoinder-listr2[@2.0.1][16] (2025-06-14)

#### 🪄 Fixes

- Do not expose internal properties when exporting types ([f64c1e0][17])

<br />

## rejoinder-listr2[@1.0.0][18] (2025-01-11)

### ✨ Features

- **packages/listr2:** split off listr2 functionality from primary package ([1ae6d7a][19])

### ⚙️ Build System

- **babel:** break other dependency cycle between symbiote and rejoinder during build step ([3a2647a][20])
- **packages/listr2:** add missing @-xun/debug dependency ([9b411cb][21])
- **packages/listr2:** update rejoinder to 1.1.0 ([5838a13][22])
- Regenerate assets ([78424fa][23])
- Use proper codecov package flag for badge link ([5526095][24])

<br />

### 🏗️ Patch rejoinder-listr2[@1.0.3][25] (2025-02-21)

#### ⚙️ Build System

- **packages/listr2:** make all listr2 components peer dependencies ([ebceb3c][26])

<br />

### 🏗️ Patch rejoinder-listr2[@1.0.2][27] (2025-01-20)

#### ⚙️ Build System

- Regenerate assets ([d837f2c][28])

<br />

### 🏗️ Patch rejoinder-listr2[@1.0.1][29] (2025-01-16)

#### 🪄 Fixes

- **packages/listr2:** emulate console.log via util.inspect during output ([71098af][30])
- **packages/listr2:** properly extend `ExtendedLogger` ([514d3c1][31])

#### ⚙️ Build System

- Add `--no-parallel` to release script ([36d9b15][32])
- **cycle-breaker:** ensure rejoinder\~dev receives its own copy of @-xun/debug\~dev ([b10e6fc][33])
- **release:** re-apply cycle-breaker patches after xrelease un-applies them ([571041b][34])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-listr2@2.0.2...rejoinder-listr2@2.1.0
[4]: https://github.com/Xunnamius/rejoinder/commit/52d6c5986d373475d1c3a8376e976f7da1d1f9b6
[5]: https://github.com/Xunnamius/rejoinder/commit/a7f33dcc3e6007982f6b687e64063c3e680d1084
[6]: https://github.com/Xunnamius/rejoinder/commit/c2612aef66b4b21cfdeb6768b26b95963881ed3e
[7]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-listr2@2.1.0...rejoinder-listr2@2.1.1
[8]: https://github.com/Xunnamius/rejoinder/commit/60581df5e629bdcd0accd4723a75a3d58d23cbc6
[9]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-listr2@1.0.3...rejoinder-listr2@2.0.0
[10]: https://github.com/Xunnamius/rejoinder/commit/b01c9bc089488b02722519d911bc43d1c672b492
[11]: https://github.com/Xunnamius/rejoinder/commit/baf5c89e66b1bdacf31ca37e80d78e8f1b048530
[12]: https://github.com/Xunnamius/rejoinder/commit/d9d4f378320c4405c80cb306d8174b752def9292
[13]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-listr2@2.0.1...rejoinder-listr2@2.0.2
[14]: https://github.com/Xunnamius/rejoinder/commit/3c7d2dda1af5ce518004ba342b8d746a9037f33c
[15]: https://github.com/Xunnamius/rejoinder/commit/b0bedaf49c491057360340dd6c98f4152d6c41a2
[16]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-listr2@2.0.0...rejoinder-listr2@2.0.1
[17]: https://github.com/Xunnamius/rejoinder/commit/f64c1e0c19bc97c588be2ae8d7b20734d4ed6719
[18]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-listr2@0.0.0-init...rejoinder-listr2@1.0.0
[19]: https://github.com/Xunnamius/rejoinder/commit/1ae6d7add578fdf5fc3d27121c96d3acc6bcd0b6
[20]: https://github.com/Xunnamius/rejoinder/commit/3a2647a4383d23c44984f5fba72936f803375d01
[21]: https://github.com/Xunnamius/rejoinder/commit/9b411cbf735ad2907a387f69e10bda651223208b
[22]: https://github.com/Xunnamius/rejoinder/commit/5838a1333ac9de7c91d67ae8237becbb22928097
[23]: https://github.com/Xunnamius/rejoinder/commit/78424fa8f7badb679969f17dc434d2444f557d0d
[24]: https://github.com/Xunnamius/rejoinder/commit/5526095585c560786bb4716fe2181814ff33c2ac
[25]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-listr2@1.0.2...rejoinder-listr2@1.0.3
[26]: https://github.com/Xunnamius/rejoinder/commit/ebceb3c61ea83f6d772c86f8473a24ad60bca01b
[27]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-listr2@1.0.1...rejoinder-listr2@1.0.2
[28]: https://github.com/Xunnamius/rejoinder/commit/d837f2cf51d0f744b1acb9f03c50dbfbe4361561
[29]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-listr2@1.0.0...rejoinder-listr2@1.0.1
[30]: https://github.com/Xunnamius/rejoinder/commit/71098af7598078495b83dd5fb022fae812ef7cea
[31]: https://github.com/Xunnamius/rejoinder/commit/514d3c155403b5eb235d6e5fb5d6402fc7dafcdf
[32]: https://github.com/Xunnamius/rejoinder/commit/36d9b15a656e1eed5a50cdfe7fe502a22f0aa57f
[33]: https://github.com/Xunnamius/rejoinder/commit/b10e6fc514367aef02468efe7382c2a09b7d45d5
[34]: https://github.com/Xunnamius/rejoinder/commit/571041bf4746363a1355f6eb2e03d6c31e5b0a18
