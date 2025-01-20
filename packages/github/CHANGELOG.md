# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## rejoinder-github-actions[@1.0.0][3] (2025-01-16)

### ✨ Features

- **packages/github:** implement rejoinder-github-actions ([2551251][4])

### ⚙️ Build System

- Add `--no-parallel` to release script ([36d9b15][5])
- **babel:** break other dependency cycle between symbiote and rejoinder during build step ([3a2647a][6])
- **cycle-breaker:** ensure rejoinder\~dev receives its own copy of @-xun/debug\~dev ([b10e6fc][7])
- **packages/github:** properly export entry points ([28f207c][8])
- Regenerate assets ([78424fa][9])
- **release:** re-apply cycle-breaker patches after xrelease un-applies them ([571041b][10])
- Use proper codecov package flag for badge link ([5526095][11])

<br />

### 🏗️ Patch rejoinder-github-actions[@1.0.1][12] (2025-01-20)

#### ⚙️ Build System

- Regenerate assets ([d837f2c][13])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-github-actions@0.0.0-init...rejoinder-github-actions@1.0.0
[4]: https://github.com/Xunnamius/rejoinder/commit/25512516e21add20497e52d758b03f89019dba1c
[5]: https://github.com/Xunnamius/rejoinder/commit/36d9b15a656e1eed5a50cdfe7fe502a22f0aa57f
[6]: https://github.com/Xunnamius/rejoinder/commit/3a2647a4383d23c44984f5fba72936f803375d01
[7]: https://github.com/Xunnamius/rejoinder/commit/b10e6fc514367aef02468efe7382c2a09b7d45d5
[8]: https://github.com/Xunnamius/rejoinder/commit/28f207c6ba64b9a63e6d2be34865f901fe3109ac
[9]: https://github.com/Xunnamius/rejoinder/commit/78424fa8f7badb679969f17dc434d2444f557d0d
[10]: https://github.com/Xunnamius/rejoinder/commit/571041bf4746363a1355f6eb2e03d6c31e5b0a18
[11]: https://github.com/Xunnamius/rejoinder/commit/5526095585c560786bb4716fe2181814ff33c2ac
[12]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-github-actions@1.0.0...rejoinder-github-actions@1.0.1
[13]: https://github.com/Xunnamius/rejoinder/commit/d837f2cf51d0f744b1acb9f03c50dbfbe4361561
