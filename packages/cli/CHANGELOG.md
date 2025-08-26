# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## rejoinder-cli\@1.0.0 (2025-08-26)

### 💥 BREAKING CHANGES 💥

- Minimum supported node version is now 20.18.0

### ✨ Features

- **packages/cli:** implement rejoinder-cli ([4b333c1][3])
- **packages/cli:** remove timestamp from output ([528111f][4])

### 🪄 Fixes

- **packages/cli:** ensure cli logger outputs properly ([4f79dfb][5])
- **packages/cli:** only use `createGithubLogger` if CI environment variable is defined and enabled ([bb00567][6])
- **packages:** correct documentation ([9ee036f][7])

### ⚙️ Build System

- Add `--no-parallel` to release script ([36d9b15][8])
- **babel:** break other dependency cycle between symbiote and rejoinder during build step ([3a2647a][9])
- **cycle-breaker:** ensure rejoinder\~dev receives its own copy of @-xun/debug\~dev ([b10e6fc][10])
- **deps:** bump internal monorepo interdependencies to latest versions ([9479a46][11])
- **package:** drop support for node\@18 ([baf5c89][12])
- **packages/cli:** add missing dependencies ([0a2aaaf][13])
- **packages/cli:** break off rejoinder-cli from rejoinder as standalone package ([ab7a0f3][14])
- **packages/cli:** make all cli names available ([f33dbc3][15])
- **packages:** use sane values for peer dependencies ([b0bedaf][16])
- Regenerate assets ([d837f2c][17])
- Regenerate assets ([78424fa][18])
- **release:** re-apply cycle-breaker patches after xrelease un-applies them ([571041b][19])
- Use proper codecov package flag for badge link ([5526095][20])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/rejoinder/commit/4b333c145c582e16a1aff002861b26c489654bef
[4]: https://github.com/Xunnamius/rejoinder/commit/528111f11889a058fd944a40c24ed5d34ecc741e
[5]: https://github.com/Xunnamius/rejoinder/commit/4f79dfbc53422bef37c77bc2b4445329b08b0181
[6]: https://github.com/Xunnamius/rejoinder/commit/bb00567e3ad9e75d2d02d421993c58d4c21a53f5
[7]: https://github.com/Xunnamius/rejoinder/commit/9ee036f869f12313780efbf5ead2184da5f4b716
[8]: https://github.com/Xunnamius/rejoinder/commit/36d9b15a656e1eed5a50cdfe7fe502a22f0aa57f
[9]: https://github.com/Xunnamius/rejoinder/commit/3a2647a4383d23c44984f5fba72936f803375d01
[10]: https://github.com/Xunnamius/rejoinder/commit/b10e6fc514367aef02468efe7382c2a09b7d45d5
[11]: https://github.com/Xunnamius/rejoinder/commit/9479a46224f2c2abbf07c4578ac8ac4df5b00533
[12]: https://github.com/Xunnamius/rejoinder/commit/baf5c89e66b1bdacf31ca37e80d78e8f1b048530
[13]: https://github.com/Xunnamius/rejoinder/commit/0a2aaaf72a2ba10068362711259ae81118451687
[14]: https://github.com/Xunnamius/rejoinder/commit/ab7a0f32e566d9388c79571a96171daa50adfecf
[15]: https://github.com/Xunnamius/rejoinder/commit/f33dbc3485016c26136a683a175dd8ce7381e61a
[16]: https://github.com/Xunnamius/rejoinder/commit/b0bedaf49c491057360340dd6c98f4152d6c41a2
[17]: https://github.com/Xunnamius/rejoinder/commit/d837f2cf51d0f744b1acb9f03c50dbfbe4361561
[18]: https://github.com/Xunnamius/rejoinder/commit/78424fa8f7badb679969f17dc434d2444f557d0d
[19]: https://github.com/Xunnamius/rejoinder/commit/571041bf4746363a1355f6eb2e03d6c31e5b0a18
[20]: https://github.com/Xunnamius/rejoinder/commit/5526095585c560786bb4716fe2181814ff33c2ac
