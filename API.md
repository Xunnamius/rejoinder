# action

# debug

# error

# exit

# info

# ok

# skip

# success

# warn

# Execute

**Parameters**

-   `echoInstance`  

## butIgnoreErrors

Execute a shell command, except it will ignore a non-zero exit code from
the command.

**Parameters**

-   `command` **String** The shell command to execute
-   `description` **[String]** A description of what this command is doing

Returns **Boolean** If the command succeeded or failed

## constructor

Composes an Echo object as a requisite for instantiation.

**Parameters**

-   `echoInstance` **Echo** A fully instantiated Echo object instance

## now

Execute a shell command right now.

**Parameters**

-   `command` **String** The shell command to execute
-   `description` **[String]** A description of what this command is doing
-   `ignoreErrors` **[Boolean]** Ignore a non-zero exit code from the command

Returns **Boolean** If the command succeeded or failed

## withoutLogging

Execute a shell command, except no logs will be written by the execute
command.

**Parameters**

-   `command` **String** The shell command to execute
-   `description` **[String]** A description of what this command is doing
-   `ignoreErrors` **[Boolean]** Ignore a non-zero exit code from the command

Returns **Boolean** If the command succeeded or failed

# Echo

**Parameters**

-   `prefix`  

## constructor

**Parameters**

-   `prefix` **[String]** An optional prefix that will appear before each
    emission to stdout

## if

Emit one or more strings to stdout if and only if some condition is met.

**Parameters**

-   `condition` **Boolean** A condition to evaluate
-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling now()

## ifVerbose

Emit one or more strings to stdout if and only if beVerbose is true.

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPrefix()

## now

Emit one or more strings to stdout right now.

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling shelljs.echo

## thenBadExit

Emit one or more strings to stdout and then exit with a custom error code.

**Parameters**

-   `code` **Integer** The status code to exit the process with
-   `msg` **...String** One or more strings to emit to stdout

## thenExit

Emit one or more strings to stdout and then exit with code 0.

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling thenBadExit()

## toLog

Write one or more strings to a file.

**Parameters**

-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling fs.toEnd()

## usingPredicate

Emit one or more strings to stdout after applying a predicate function to
each string.

**Parameters**

-   `predicate` **Function** Function that will be applied to all strings
    in msg
-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling now()

## withPostfix

**Parameters**

-   `postfix` **String** A prefix that will appear before the emission
-   `msg` **...String** One or more strings to emit to stdout

Returns **Any** The result from calling withPrefix()

## withPrefix

Switches the prefix temporarily. Only the code in the callback will respect
the new prefix. Once the callback finishes executing, the prefix will
revert back to its previous value.

**Parameters**

-   `prefix` **String** A prefix that will appear before each emission to
    sdout
-   `fn` **Function** A callback function wherein the prefix takes effect

Returns **Any** The result from calling fn()

# defineProperty

# defineProperty

# defineProperty

# defineProperty

# defineProperty

**Properties**

-   `totalSuccess` **Boolean** Will remain true so long as all of the commands executed up until the
    point that totalSuccess is queried exited with 0 status codes. Becomes
    false in all other scenarios.

# formatAsAction

Allows a string to be formatted to represent an action This method modifies
the String prototype and is therefore globally applied upon import..

Returns **String** 

# formatAsError

Allows a string to be formatted to represent an error. This method modifies
the String prototype and is therefore globally applied upon import.

Returns **String** 

# formatAsSuccess

Allows a string to be formatted to represent an success. This method modifies
the String prototype and is therefore globally applied upon import.

Returns **String** 

# formatAsWarning

Allows a string to be formatted to represent an warning. This method modifies
the String prototype and is therefore globally applied upon import.

Returns **String** 
