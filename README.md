[![npm version](https://badge.fury.io/js/rejoinder.svg)](https://badge.fury.io/js/rejoinder)

# REJOINDER

    rejoinder
    /rɪˈdʒɔɪndə/
    noun
    a reply or response to a question or remark, esp a quick witty one; retort

Rejoinder is a generator of smart, pretty, and organized output for Node/JS scripts, replacing several of the console.* utilities.
It leverages colors and the like using the [colors package](https://www.npmjs.com/package/colors). Makes life easier when executing CLI instructions
with [shelljs](https://www.npmjs.com/package/shelljs) using specialized methods.

Super awesome when paired with [inquirer](https://www.npmjs.com/package/inquirer) and/or [commander](https://www.npmjs.com/package/commander)!

Also does children's parties.

## Documentation

### Installation

```shell
npm install rejoinder
```

```javascript
var echo = require("rejoinder");
echo.ifDebug('Some debug message');
echo('some other message'.formatAsError());
```

### Examples (run it and see it)

Checkout the `examples/` folder for code and interface examples.

```shell
node examples/pizza.js
node examples/runner.js
# etc...
```

### Methods
(coming soon)
