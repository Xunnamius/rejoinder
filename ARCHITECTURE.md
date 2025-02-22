<!-- symbiote-template-region-start 1 -->

# 📐 Project Architecture

Before continuing with this document, see the document on the [generic project
architecture][1] expected by projects (like this repository) that leverage
[symbiote][2].

What follows are any notable additions and/or deviations from the aforementioned
document.

<br />

---

<br />

<!-- symbiote-template-region-end -->

<br />

## Cycle Breaker

This project employs a "cycle-breaker" script that relies on the presence of
`rejoinder~dev` (symlinked into the bundled version of rejoinder from symbiote)
to stabilize the development environment. See [`cycle-breaker.mjs`][4] for
details.

[1]: https://github.com/Xunnamius/symbiote/wiki/Generic-Project-Architecture
[2]: https://github.com/Xunnamius/symbiote
[4]: ./cycle-breaker.mjs
