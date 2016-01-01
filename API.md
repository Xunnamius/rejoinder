# Class Execute

The Execute class is used to execute one or more commands. It can also be made
to write output to a log, check return values, and notify on failure. Is is
also aware of the silence/verbose settings on the composed Echo object.

**Properties**

-   `totalSuccess` **Boolean** Will remain true so long as all of the commands executed up until the
    point that totalSuccess is queried exited with 0 status codes. Becomes
    false in all other scenarios.

## Execute#constructor

Composes an Echo object as a requisite for instantiation.

**Parameters**

-   `echoInstance` **Echo** A fully instantiated Echo object instance

## Execute#butIgnoreErrors

Execute a shell command, except it will ignore a non-zero exit code from
the command.

**Parameters**

-   `command` **String** The shell command to execute
-   `description` **[String]** A description of what this command is doing

Returns **Boolean** If the command succeeded or failed

## Execute#now

Execute a shell command right now.

**Parameters**

-   `command` **String** The shell command to execute
-   `description` **[String]** A description of what this command is doing
-   `ignoreErrors` **[Boolean]** Ignore a non-zero exit code from the command

Returns **Object** The information object returned by shell.exec

## Execute#withoutLogging

Execute a shell command, except no logs will be written by the execute
command.

**Parameters**

-   `command` **String** The shell command to execute
-   `description` **[String]** A description of what this command is doing
-   `ignoreErrors` **[Boolean]** Ignore a non-zero exit code from the command

Returns **Boolean** If the command succeeded or failed

# Class Echo

The Echo class exposes an API for echoing out to stdout in a clean and concise
manner.

**Properties**

-   `separator` **String** The value that will be printed between the prefix and the message

-   `logFilePath` **String** Determines where toLog() will write out to, if anywhere all. A falsy value
    will prevent any logs from being written.

-   `beVerbose` **Boolean** Indicates that the script should be as verbose as possible in its output
    when true. Was formerly DEBUG_MODE.

-   `prefix` **String** The value to prefix all messages with by default.

## Echo#constructor

**Parameters**

-   `prefix` **[String]** An optional prefix that will appear before each
    emission to stdout

## Echo#if

Emit one or more strings to stdout if and only if some condition is met.

**Parameters**

-   `condition` **Boolean** A condition to evaluate
-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling now()

## Echo#ifVerbose

Emit one or more strings to stdout if and only if beVerbose is true.

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPrefix()

## Echo#ifDebug

Emit one or more strings to stdout if and only if beVerbose is true.
Emission will occur as if called by Echo.withPostfix.debug().

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPrefix()

## Echo#now

Emit one or more strings to stdout right now.

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling shelljs.echo

## Echo#thenBadExit

Emit one or more strings to stdout and then exit with a custom error code.
Emission will occur as if called by Echo.withPostfix.badExit().

**Parameters**

-   `code` **Integer** The status code to exit the process with
-   `msg` **...String** One or more strings to emit to stdout

## Echo#thenExit

Emit one or more strings to stdout and then exit with code 0.
Emission will occur as if called by Echo.withPostfix.exit().

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling thenBadExit()

## Echo#toLog

Write one or more strings to a file.

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling fs.toEnd()

## Echo#usingPredicate

Emit one or more strings to stdout after applying a predicate function to
each string.

**Parameters**

-   `predicate` **Function** Function that will be applied to all strings
    in msg
-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling now()

## Echo#withPostfix

Emit one or more strings to stdout with an additional prefix applied.

**Parameters**

-   `postfix` **String** A prefix that will appear before the emission
-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPrefix()

## Echo.withPostfix#action

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPostfix()

## Echo.withPostfix#debug

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPostfix()

## Echo.withPostfix#error

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPostfix()

## Echo.withPostfix#exit

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPostfix()

## Echo.withPostfix#badExit

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPostfix()

## Echo.withPostfix#info

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPostfix()

## Echo.withPostfix#ok

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPostfix()

## Echo.withPostfix#skip

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPostfix()

## Echo.withPostfix#success

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPostfix()

## Echo.withPostfix#warn

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPostfix()

## Echo#withPrefix

Switches the prefix temporarily. Only the code in the callback will respect
the new prefix. Once the callback finishes executing, the prefix will
revert back to its previous value.

**Parameters**

-   `prefix` **String** A prefix that will appear before each emission to
    sdout
-   `fn` **Function** A callback function wherein the prefix takes effect

Returns **Any** The result from calling fn()

# Global Methods

## String.prototype#formatAsAction

Allows a string to be formatted to represent an action This method modifies
the String prototype and is therefore globally applied upon import.

**Parameters**

-   `includePrefix` [**Boolean**]

Returns **String**

## String.prototype#formatAsError

Allows a string to be formatted to represent an error. This method modifies
the String prototype and is therefore globally applied upon import.

**Parameters**

-   `includePrefix` [**Boolean**]

Returns **String**

## String.prototype#formatAsSuccess

Allows a string to be formatted to represent an success. This method modifies
the String prototype and is therefore globally applied upon import.

**Parameters**

-   `includePrefix` [**Boolean**]

Returns **String**

## String.prototype#formatAsWarning

Allows a string to be formatted to represent an warning. This method modifies
the String prototype and is therefore globally applied upon import.

**Parameters**

-   `includePrefix` [**Boolean**]

Returns **String**
