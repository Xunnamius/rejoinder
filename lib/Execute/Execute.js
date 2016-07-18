#!/usr/bin/nodejs --harmony
/*jshint esnext:true */

/*
 * @author Xunnamius
 */

"use strict";

let shell  = require('shelljs');
let Echo   = require('../Echo/Echo');

let noop = function(arg){ return arg; };
let colors = { red: noop, green: noop, yellow: noop, blue: noop };

try
{
    // Try to import the optional packages. If the import fails... well, whatever.
    colors = require('colors');
}
catch(e){}

/**
 * The Execute class is used to execute one or more commands. It can also be made
 * to write output to a log, check return values, and notify on failure. Is is
 * also aware of the silence/verbose settings on the composed Echo object.
 */
class Execute
{
    /**
     * Composes an Echo object as a requisite for instantiation.
     *
     * @param {Echo} echoInstance A fully instantiated Echo object instance
     */
    constructor(echoInstance)
    {
        if(!(echoInstance instanceof Echo))
            throw new TypeError('Execute expects 1 argument of type Echo to be passed in during instantiation');

        let totalSuccess = true;

        Object.defineProperty(this, '_echo',
            { value : echoInstance, writeable : false, enumerable : false, configurable: false });

        /**
         * @property {Boolean} totalSuccess
         * 
         * Will remain true so long as all of the commands executed up until the
         * point that totalSuccess is queried exited with 0 status codes. Becomes
         * false in all other scenarios.
         */
        Object.defineProperty(this, 'totalSuccess', {
            get() { return totalSuccess; },
            set(val) { totalSuccess = totalSuccess && val; }
        });
    }

    /**
     * Execute a shell command right now.
     *
     * @param {String} command          The shell command to execute
     * @param {String} [description]    A description of what this command is doing
     * @param {Boolean} [ignoreErrors]  Ignore a non-zero exit code from the command
     * 
     * @return {Object}                 The information object returned by shell.exec
     */
    now(command, description, ignoreErrors)
    {
        let failmsg = 'FAILED!';
        let successmsg = 'OK';

        // Echo message
        if(description)
            this._echo.now(description);

        this._echo.ifDebug('command: ' + command);

        // Execute command
        let result = shell.exec(command, { silent: !this._echo.beVerbose });

        this._echo.toLog('command: ' + command);

        let output = (result.stdout + result.stderr) || '(no output)';
        this._echo.ifDebug(output);

        // Write output to log
        this._echo.toLog(output);
        this._echo.toLog(result.code);

        // Process result code
        if(result.code !== 0 && !ignoreErrors)
        {
            if(description)
                this._echo.withPostfix.error(failmsg);
            else
                this._echo.ifDebug(colors.red(failmsg));

            this._echo.toLog(failmsg);
            this.totalSuccess = false; // XXX: Special property rules are in effect!
            return result;
        }

        else
        {
            if(description)
                this._echo.withPostfix.success(successmsg);
            else
                this._echo.ifDebug(colors.green(successmsg));

            this._echo.toLog(successmsg);
        }

        this.totalSuccess = true; // XXX: Special property rules are in effect!
        return result;
    }

    /**
     * Execute a shell command, except it will ignore a non-zero exit code from
     * the command.
     *
     * @param {String} command          The shell command to execute
     * @param {String} [description]    A description of what this command is doing
     *
     * @return {Boolean}                If the command succeeded or failed
     */
    butIgnoreErrors(command, description)
    {
        return this.now(command, description, true);
    }

    /**
     * Execute a shell command, except no logs will be written by the execute
     * command.
     *
     * @param {String} command          The shell command to execute
     * @param {String} [description]    A description of what this command is doing
     * @param {Boolean} [ignoreErrors]  Ignore a non-zero exit code from the command
     *
     * @return {Boolean}                If the command succeeded or failed
     */
    withoutLogging(command, description, ignoreErrors)
    {
        let prevLog = this._echo.logFilePath;
        this._echo.logFilePath = null;
        let result = this.now(command, description, ignoreErrors);
        this._echo.logFilePath = prevLog;

        return result;
    }
}

module.exports = Execute;
