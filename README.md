[![npm version](https://badge.fury.io/js/rejoinder.svg)](https://badge.fury.io/js/rejoinder)

# REJOINDER

    rejoinder
    /rɪˈdʒɔɪndə/
    noun
    a reply or response to a question or remark, esp a quick witty one; retort

Rejoinder is a generator of smart, pretty, and organized output on the console for Node/JS scripts, with optimizations
for executing shell commands. It leverages colors and the like using the [colors package](https://www.npmjs.com/package/colors)
and makes life easier when executing CLI instructions with [shelljs](https://www.npmjs.com/package/shelljs). ShellJS and
any CLI extensions are not required, however! Check out `lib/Echo/EmitStrategy` if you're curious :)

Super awesome when paired with [inquirer](https://www.npmjs.com/package/inquirer) and/or [commander](https://www.npmjs.com/package/commander)!

Also does children's parties.

**Note that rejoinder requires Node.js version >=5.x (including ^6) but does NOT depend on use of the --harmony flag!**

## Installation

```shell
npm install rejoinder
```

If you want support from shelljs (required to use `Execute`), install that too:

```shell
npm install shelljs
```

## Usage and Examples

```javascript
var rejoinder = require('rejoinder');
var echo = rejoinder.echo;
var execute = rejoinder.execute;

echo.now('output this very important warning to the console with pretty colors'.formatAsWarning());

echo.beVerbose = true;
echo.ifVerbose('Some debug message will appear');
echo.beVerbose = false;
echo.ifVerbose('Some debug message will not appear!');

echo.if(somethingistrue, 'I spit only the truth!'.formatAsSuccess());

echo.now('all', 'my', 'methods', 'are', 'also', 'variadic!');
echo.if(true, 'even', 'this', 'one :)');

echo.separator = '-';
echo.now('changed', 'the', 'game!');

echo.separator = ' ';
echo.prefix = 'Big:Boy:Time:';
echo.usingPredicate(function(str){ return `"${str}"`; }, 'the', 'time', 'for', 'fun and games is', 'over!');

echo.withPrefix('~>', function()
{
    echo.now('or');
    echo.now('is', 'it? I wonder.');
    echo.withPostfix('NO', 'Wait!');
    echo.withPostfix.action("Don't make me bring Execute into this...");
});

echo.beVerbose = true;
execute.now('return 0'); // prints the command and the result thanks to echo.beVerbose!
```

## Documentation
See [API.md](API.md)

## Tests

npm install
npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.3.x Several bugfixes
* 0.2.0 Initial working release; unit tested; semver versioning semantics are obeyed from this point forward
* 0.1.x Rapid iteration
