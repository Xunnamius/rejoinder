# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## rejoinder-github-actions[@2.0.0][3] (2025-06-14)

### 💥 BREAKING CHANGES 💥

- **Namespace activation will once again perfectly mirror vanilla debug**

  Earlier versions of this package experimented with ways to separate the root namespace from the others. This change reverts those experiments entirely.

- Minimum supported node version is now 20.18.0

### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.43.0 ([680f375][4])
- **package:** drop support for node\@18 ([baf5c89][5])

### 🧙🏿 Refactored

- Remove broken "double-colon" namespace feature ([d9d4f37][6])

<br />

## rejoinder-github-actions[@1.0.0][7] (2025-01-16)

### ✨ Features

- **packages/github:** implement rejoinder-github-actions ([2551251][8])

### ⚙️ Build System

- Add `--no-parallel` to release script ([36d9b15][9])
- **babel:** break other dependency cycle between symbiote and rejoinder during build step ([3a2647a][10])
- **cycle-breaker:** ensure rejoinder\~dev receives its own copy of @-xun/debug\~dev ([b10e6fc][11])
- **packages/github:** properly export entry points ([28f207c][12])
- Regenerate assets ([78424fa][13])
- **release:** re-apply cycle-breaker patches after xrelease un-applies them ([571041b][14])
- Use proper codecov package flag for badge link ([5526095][15])

<br />

### 🏗️ Patch rejoinder-github-actions[@1.0.3][16] (2025-02-21)

#### 🪄 Fixes

- Replace useage of `globalThis.console` with `node:console` ([03b3613][17])

<br />

### 🏗️ Patch rejoinder-github-actions[@1.0.2][18] (2025-01-25)

#### 🪄 Fixes

- **packages/github:** ensure `newline` function works consistently in extended instances ([f0345f9][19])

<br />

### 🏗️ Patch rejoinder-github-actions[@1.0.1][20] (2025-01-20)

#### ⚙️ Build System

- Regenerate assets ([d837f2c][21])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-github-actions@1.0.3...rejoinder-github-actions@2.0.0
[4]: https://github.com/Xunnamius/rejoinder/commit/680f375448b06c1229b024b81de301b95fb66bf2
[5]: https://github.com/Xunnamius/rejoinder/commit/baf5c89e66b1bdacf31ca37e80d78e8f1b048530
[6]: https://github.com/Xunnamius/rejoinder/commit/d9d4f378320c4405c80cb306d8174b752def9292
[7]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-github-actions@0.0.0-init...rejoinder-github-actions@1.0.0
[8]: https://github.com/Xunnamius/rejoinder/commit/25512516e21add20497e52d758b03f89019dba1c
[9]: https://github.com/Xunnamius/rejoinder/commit/36d9b15a656e1eed5a50cdfe7fe502a22f0aa57f
[10]: https://github.com/Xunnamius/rejoinder/commit/3a2647a4383d23c44984f5fba72936f803375d01
[11]: https://github.com/Xunnamius/rejoinder/commit/b10e6fc514367aef02468efe7382c2a09b7d45d5
[12]: https://github.com/Xunnamius/rejoinder/commit/28f207c6ba64b9a63e6d2be34865f901fe3109ac
[13]: https://github.com/Xunnamius/rejoinder/commit/78424fa8f7badb679969f17dc434d2444f557d0d
[14]: https://github.com/Xunnamius/rejoinder/commit/571041bf4746363a1355f6eb2e03d6c31e5b0a18
[15]: https://github.com/Xunnamius/rejoinder/commit/5526095585c560786bb4716fe2181814ff33c2ac
[16]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-github-actions@1.0.2...rejoinder-github-actions@1.0.3
[17]: https://github.com/Xunnamius/rejoinder/commit/03b3613ea5521daeec1921ccb4f8819f94b7098e
[18]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-github-actions@1.0.1...rejoinder-github-actions@1.0.2
[19]: https://github.com/Xunnamius/rejoinder/commit/f0345f969b3e8ccfc9a4dc96e3a670ff5e335f69
[20]: https://github.com/Xunnamius/rejoinder/compare/rejoinder-github-actions@1.0.0...rejoinder-github-actions@1.0.1
[21]: https://github.com/Xunnamius/rejoinder/commit/d837f2cf51d0f744b1acb9f03c50dbfbe4361561
