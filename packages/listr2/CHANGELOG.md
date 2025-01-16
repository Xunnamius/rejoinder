# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## rejoinder-listr2[@1.0.0][3] (2025-01-11)

### ✨ Features

- **packages/listr2:** split off listr2 functionality from primary package ([1ae6d7a][4])

### ⚙️ Build System

- **babel:** break other dependency cycle between symbiote and rejoinder during build step ([3a2647a][5])
- **packages/listr2:** add missing @-xun/debug dependency ([9b411cb][6])
- **packages/listr2:** update rejoinder to 1.1.0 ([5838a13][7])
- Regenerate assets ([78424fa][8])
- Use proper codecov package flag for badge link ([5526095][9])

<br />

### 🏗️ Patch rejoinder-listr2[@1.0.1][10] (2025-01-16)

#### 🪄 Fixes

- **packages/listr2:** emulate console.log via util.inspect during output ([71098af][11])
- **packages/listr2:** properly extend `ExtendedLogger` ([514d3c1][12])

#### ⚙️ Build System

- Add `--no-parallel` to release script ([36d9b15][13])
- **cycle-breaker:** ensure rejoinder\~dev receives its own copy of @-xun/debug\~dev ([b10e6fc][14])
- **release:** re-apply cycle-breaker patches after xrelease un-applies them ([571041b][15])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-listr2@0.0.0-init...rejoinder-listr2@1.0.0
[4]: https://github.com/Xunnamius/rejoinder/commit/1ae6d7add578fdf5fc3d27121c96d3acc6bcd0b6
[5]: https://github.com/Xunnamius/rejoinder/commit/3a2647a4383d23c44984f5fba72936f803375d01
[6]: https://github.com/Xunnamius/rejoinder/commit/9b411cbf735ad2907a387f69e10bda651223208b
[7]: https://github.com/Xunnamius/rejoinder/commit/5838a1333ac9de7c91d67ae8237becbb22928097
[8]: https://github.com/Xunnamius/rejoinder/commit/78424fa8f7badb679969f17dc434d2444f557d0d
[9]: https://github.com/Xunnamius/rejoinder/commit/5526095585c560786bb4716fe2181814ff33c2ac
[10]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-listr2@1.0.0...rejoinder-listr2@1.0.1
[11]: https://github.com/Xunnamius/rejoinder/commit/71098af7598078495b83dd5fb022fae812ef7cea
[12]: https://github.com/Xunnamius/rejoinder/commit/514d3c155403b5eb235d6e5fb5d6402fc7dafcdf
[13]: https://github.com/Xunnamius/rejoinder/commit/36d9b15a656e1eed5a50cdfe7fe502a22f0aa57f
[14]: https://github.com/Xunnamius/rejoinder/commit/b10e6fc514367aef02468efe7382c2a09b7d45d5
[15]: https://github.com/Xunnamius/rejoinder/commit/571041bf4746363a1355f6eb2e03d6c31e5b0a18
