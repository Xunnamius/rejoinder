[![npm version](https://badge.fury.io/js/rejoinder.svg)](https://badge.fury.io/js/rejoinder)

# REJOINDER

    rejoinder
    /rɪˈdʒɔɪndə/
    noun
    a reply or response to a question or remark, esp a quick witty one; retort

Rejoinder is a generator of smart, pretty, and organized output for Node/JS scripts, especially when executing shell commands.
It leverages colors and the like using the [colors package](https://www.npmjs.com/package/colors). Makes life easier when executing CLI instructions
with [shelljs](https://www.npmjs.com/package/shelljs) using specialized objects.

Super awesome when paired with [inquirer](https://www.npmjs.com/package/inquirer) and/or [commander](https://www.npmjs.com/package/commander)!

Also does children's parties.

**Note that rejoinder requires Node.js version 5.x and, until rest parameters are shipped by default, use of [the --harmony flag](https://nodejs.org/en/docs/es6/#which-features-are-behind-the-es_staging-flag)!**

## Installation

```shell
npm install rejoinder
```

## Usage

```javascript
var Echo = require('rejoinder').Echo;
var echo = new Echo();
echo.beVerbose = true;
echo.ifVerbose('Some debug message');
echo('some other message'.formatAsWarning());
```

## Examples (run it and see it)

Checkout the `examples/` folder for code and interface examples.

```shell
node examples/pizza.js
node examples/runner.js
# etc...
```

## Methods
(coming soon)

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.2.0 Initial working release, unit tested
* 0.1.x Rapid Iteration)
