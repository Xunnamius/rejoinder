[![npm
version](https://badge.fury.io/js/rejoinder.svg)](https://badge.fury.io/js/rejoinder)

# REJOINDER

    rejoinder
    /rɪˈdʒɔɪndə/
    noun
    a reply or response to a question or remark, esp a quick witty one; retort

Rejoinder is that generator of smart, pretty, highly organized output your
parents warned you about.

TODO: SPIN OFF EXECUTABLE POWERS INTO A SLASH-FILE VERSION i.e.
rejoinder/execute

Super awesome when paired with
[inquirer](https://www.npmjs.com/package/inquirer) and/or
[commander](https://www.npmjs.com/package/commander)!

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
const rejoinder = require('rejoinder');
let echo = rejoinder.echo;
let execute = rejoinder.execute;

echo.now('output this very important warning to the console with pretty colors'); // immediate output
echo.withPostfix.warn('output this very important warning to the console with pretty colors'); // colorful output prefixed with the string "WARN "

echo.beVerbose = true; // beVerbose fka "debugMode"
echo.ifVerbose('Some message will appear if beVerbose is true');
echo.ifDebug('Some debug message will appear if beVerbose is true prefixed with the string "DEBUG "');
echo.beVerbose = false; // it is false by default
echo.ifVerbose('Some message will NOT appear if beVerbose is false!');
echo.ifDebug('Some debug message will NOT appear if beVerbose is false!');

echo.if(somethingistrue, 'I spit only the truth!'); // also returns false if somethingistrue is false

echo.now('all', 'my', 'methods', 'are', 'also', 'variadic!'); // prints "all my methods are also variadic!"
echo.if(true, 'even', 'this', 'one :)'); // prints "even this one :)"

echo.prefix = '>>'; // this will be printed directly before the message every time
echo.now('changed', 'the', 'game!'); // prints ">> changed the game!"

echo.prefix = 'Big:Boy:Time:';
echo.messageSeparator = '||'; // this is the thing between the prefix and the message
echo.usingPredicate((str) => `"${str}"`, 'the', 'time', 'for', 'fun and games is', 'over!');
// the above prints `Big:Boy:Time:||"the" "time" "for" "fun and games is" "over!"`

echo.withPostfix('postfix', 'this is', 'pretty cool'); // prints "Big:Boy:Time::postfix||this is pretty cool"
echo.postfixSeparator = '<>'; // this is the thing between the prefix and the postfix. It goes `prefix + postfixsep + postfix + msgsep + message`
echo.withPostfix('postfix', 'this too'); // prints "Big:Boy:Time:<>postfix||this too"
echo.withPostfix.ok('GOT IT!'); // prints colorful output that says "Big:Boy:Time:<>OK||GOT IT!"

// ONLY the echo statements that appear inside of this function will have the aforesaid prefix
echo.withPrefix('~>', () =>
{
    echo.now('or'); // prints "~>||or"
    echo.now('is', 'it? I wonder.'); // prints "~>||is it? I wonder."
    echo.withPostfix('NO', 'Wait!'); // prints "~><>NO||Wait!"
    echo.withPostfix.action("Don't make me bring Execute into this..."); // prints colorful output "~><>ACTION||Don't make me bring Execute into this..."
});

echo.beVerbose = true;

// prints the command and the result of executing it thanks to echo.beVerbose! See API.md for more information on how this works
execute.now('return 0');
```

## Documentation
See [API.md](API.md)

## Tests

```
npm install
npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.

Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.3.x Several bugfixes
* 0.2.0 Initial working release; unit tested; semver versioning semantics are
  obeyed from this point forward
* 0.1.x Rapid iteration
