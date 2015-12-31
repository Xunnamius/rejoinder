#!/usr/bin/env node
/*jshint esnext:true */

/*
 * @author Xunnamius
 */

"use strict";

var shell = require('shelljs');
require('../utils/stringforms.js');

// Private helper function to update the totalSuccess boolean
var updateTotalSuccess = function(val)
{
    this.totalSuccess = this.totalSuccess && val;
    return val;
};

/**
 * Execute object.
 * 
 * Composes an Echo object upon instantiation. Used to execute one or more
 * commands. Can also be made to write output to a log, check return values,
 * and notify on failure. Is also aware of silent/verbose settings.
 * 
 * @signature `Execute(Echo echo)`
 * 
 * @param {Echo} echo               A fully instantiated instance of the Echo object
 *
 * @signature `execute(String command [, String description [, Boolean ignoreErrors ]])`
 * 
 * @param {String} command          The shell command to execute
 * @param {String} [description]    A description of what this command is doing
 * @param {Boolean} [ignoreErrors]  Ignore a non-zero exit code from the command
 * 
 * @return {Boolean}                If the command succeeded or failed
 */
var Execute = function(...args)
{
    var calledWithNew = new.target; // jshint ignore:line

    if(calledWithNew)
    {
        if(args.length != 1)
            throw 'Execute expects 1 parameter of type Echo as an argument when initially instantiated';

        Object.defineProperty(this, '_instantiatedAlready',
            { value : true, writeable : false, enumerable : false, configurable: false });

        Object.defineProperty(this, '_echo',
            { value : args[0], writeable : false, enumerable : false, configurable: false });

        /**
         * @property {Boolean} totalSuccess
         * 
         * Will remain true so long as all of the commands executed up until the
         * point that totalSuccess is queried exited with 0 status codes. Becomes
         * false in all other scenarios.
         */
        Object.defineProperty(this, 'totalSuccess',
            { value : true, writeable : true, enumerable : false, configurable: false });
    }

    else
    {
        if(!this || !this._instantiatedAlready)
            throw 'you must construct a new instance of the Execute object before attempting to call it as a function';

        return this.execute(args[0], args[1], args[2]);
    }
};

/**
 * Used to execute a shell command.
 *
 * @param {String} command          The shell command to execute
 * @param {String} [description]    A description of what this command is doing
 * @param {Boolean} [ignoreErrors]  Ignore a non-zero exit code from the command
 * 
 * @return {Boolean}                If the command succeeded or failed
 */
Execute.prototype.execute = function(command, description, ignoreErrors)
{
    // Echo message
    if(description)
        this._echo(description);

    this._echo.ifVerbose('command: ' + command);

    // Execute command
    var result = shell.exec(command, { silent: !this._echo.beVerbose });

    this._echo.toLog('command: ' + command);

    // Write output to log
    this._echo.toLog(result.output || '(no output)');
    this._echo.toLog(result.code);

    // Process result code
    if(result.code !== 0 && !ignoreErrors)
    {
        if(description || this._echo.beVerbose)
            (!description ? this._echo.ifVerbose : this._echo.usingPrefix.error)('FAILED!');

        this._echo.toLog('FAILED!');
        return updateTotalSuccess.bind(this)(false);
    }

    else
    {
        if(description || this._echo.beVerbose)
            (!description ? this._echo.ifVerbose : this._echo)('OK'.formatAsSuccess());

        this._echo.toLog('OK');
    }

    return updateTotalSuccess.bind(this)(true);
};

/**
 * An alias of execute, except it will ignore a non-zero exit code from the
 * command.
 *
 * @param {String} command          The shell command to execute
 * @param {String} [description]    A description of what this command is doing
 *
 * @return {Boolean}                If the command succeeded or failed
 */
Execute.prototype.butIgnoreErrors = function(command, description)
{
    return this.execute(command, description, true);
};

/**
 * An alias of execute, except no logs will be written by the execute command.
 *
 * @param {String} command          The shell command to execute
 * @param {String} [description]    A description of what this command is doing
 * @param {Boolean} [ignoreErrors]  Ignore a non-zero exit code from the command
 *
 * @return {Boolean}                If the command succeeded or failed
 */
Execute.prototype.withoutLogging = function(command, description, ignoreErrors)
{
    var prevLog = this.logFilePath;
    this.logFilePath = null;
    var result = this.execute(command, description, ignoreErrors);
    this.logFilePath = prevLog;

    return result;
};

module.exports = Execute;
