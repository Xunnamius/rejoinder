var shell = require('shelljs');
var colors = require('colors');

// Global string helpers
String.prototype.formatAsError = function()
{
    return colors.red(this);
};

String.prototype.formatAsSuccess = function()
{
    return colors.green(this);
};

String.prototype.formatAsWarning = function()
{
    return colors.yellow(this);
};

String.prototype.formatAsAction = function()
{
    return colors.blue(this);
};

~function(exports)
{
    "use strict";

    // Privates --------------

    // Make sure any received prefix is formatted properly
    var fixPrefix = function(prefix, includeColon)
    {
        prefix = (prefix === undefined ? echo.prefix ? echo.prefix : '' : prefix).toString();
        return prefix.length && includeColon ? prefix + ':' : prefix;
    };

    // -----------------------
    
    // Echos something to stdout with a prefix
    var echo = function(message, prefix)
    {
        fixPrefix(prefix);
        return shell.echo(`${prefix}${message}`);
    };

    // Value to prefix all messages with by default
    echo.prefix = null;

    // Run a function wherein the specified prefix is active
    echo.withPrefix = function(prefix, fn)
    {
        var oldprefix = echo.prefix;
        echo.prefix = prefix;

        fn();

        echo.prefix = oldprefix;
    };

    // Only echos something to stdout if DEBUG_MODE is true
    echo.ifDebug = function(message, prefix)
    {
        if(DEBUG_MODE)
            echo(message, fixPrefix(prefix, true) + 'DEBUG');
    };

    // Echo something and then exit
    echo.thenExit = function(message, code, prefix)
    {
        echo(message, fixPrefix(prefix, true) + 'EXIT');
        process.exit(code || 0);
    };

    // Various useful prefixes
    echo.withPrefix = {
        // Echo with a skip prefix
        skip: function(message, prefix)
        {
            echo(message, fixPrefix(prefix, true) + 'SKIP');
        },

        warn: function(message, prefix)
        {
            echo(message.formatAsWarning(), fixPrefix(prefix, true) + 'WARN');
        },

        error: function(message, prefix)
        {
            echo(message.formatAsError(), fixPrefix(prefix, true) + 'ERROR');
        }
    };

    // Function responsible for writing to the log file
    echo.toLog = function(line)
    {
        if(!echo.logpath)
            return;

        (line + '\n').toEnd(echo.logpath);
    };

    // The file all logs will be written to
    echo.logpath = null;

    // Executes the given command silently (no echo), write the output to the log,
    // and checks the return value. Emits FAILED! on not 0, OK otherwise.
    var execute = function(command, description, ignoreErrors)
    {
        // Helper
        var updateTotalSuccess = function(val)
        {
            execute.totalSuccess = execute.totalSuccess && val;
            return val;
        };

        // Echo message
        if(description)
            echo(description);

        echo.ifDebug('command: ' + command);

        // Execute command
        var result = shell.exec(command, { silent: !DEBUG_MODE });

        echo.toLog('command: ' + command);

        // Write output to log
        echo.toLog(result.output || '(no output)');
        echo.toLog(result.code);

        // Process result code
        if(result.code !== 0 && !ignoreErrors)
        {
            if(description || DEBUG_MODE)
                (!description ? echo.ifDebug : echo.withPrefix.error)('FAILED!');

            echo.toLog('FAILED!');
            return updateTotalSuccess(false);
        }

        else
        {
            if(description || DEBUG_MODE)
                (!description ? echo.ifDebug : echo)('OK'.formatAsSuccess());

            echo.toLog('OK');
        }

        return updateTotalSuccess(true);
    };

    execute.andIgnoreErrors = function(command, description)
    {
        return execute(command, description, true);
    };

    // Export the results
    exports.execute = execute;
    exports.echo = echo;
    
}(module.exports);
