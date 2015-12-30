#!/usr/bin/env node
/*jshint esnext:true */

/*
 * @author Xunnamius
 */

"use strict";

var shell = require('shelljs');
require('../utils/stringforms.js');

// Private helper function that makes sure any received prefix is formatted
// properly
var fixPrefix = function(prefix, includeColon)
{
    prefix = (prefix === undefined ? (!!this.prefix ? this.prefix : '') : prefix).toString();
    return prefix.length && includeColon ? prefix + ':' : prefix;
};

// Private helper function that creates withPostfix-ready function fragments
var createPostfixLambda = function(prefix)
{
    return function(...msg)
    {
        return this.usingPrefix(
            fixPrefix.bind(this)(this.prefix, true) + prefix,
            function(){ return this.echo.apply(this, msg);
        });
    };
};

// Echos something to stdout with a prefix
var Echo = function(...args)
{
    if(this._instantiatedAlready)
    {
        return this.echo.apply(this, args);
    }

    else
    {
        if(args.length > 1)
            throw 'too many arguments passed to Echo during instantiation';

        Object.defineProperty(this, '_instantiatedAlready',
            { value : true, writeable : false, enumerable : false, configurable: false });

        /**
         * @property {String|Boolean} logpath
         * 
         * Determines where toLog() will write out to, if anywhere all. A falsy value
         * will prevent any logs from being written.
         */
        Object.defineProperty(this, 'logFilePath',
            { value : true, writeable : true, enumerable : false, configurable: false });

        /**
         * @property {String} prefix
         *
         * The value to prefix all messages with by default.
         */
        Object.defineProperty(this, 'prefix',
            { value : null, writeable : true, enumerable : false, configurable: false });

        /**
         * @property {Boolean} beVerbose
         *
         * Indicate that the script should be as verbose as possible in its output.
         * Was formerly DEBUG_MODE.
         */
        Object.defineProperty(this, 'beVerbose',
            { value : false, writeable : true, enumerable : false, configurable: false });

        if(args.length == 1)
            this.prefix = args[0];
    }
};

Echo.echo = function(...msg)
{
    var message = msg.join('');
    var prefix  = fixPrefix.bind(this)(this.prefix);

    return shell.echo(`${prefix}${message}`);
};

Echo.usingPredicate = function(predicate, ...msg)
{
    return this.echo.apply(this, msg.map(predicate));
};

// Run a function wherein the specified prefix is active
Echo.withPrefix = function(prefix, fn)
{
    var oldprefix = this.prefix;
    this.prefix = prefix;
    var result = fn();
    this.prefix = oldprefix;

    return result;
};

// Various useful prefixes
Echo.withPostfix = {
    skip:    createPostfixLambda('SKIP'),
    warn:    createPostfixLambda('WARN'),
    error:   createPostfixLambda('ERROR'),
    debug:   createPostfixLambda('DEBUG'),
    exit:    createPostfixLambda('EXIT'),
    action:  createPostfixLambda('ACTION'),
    info:    createPostfixLambda('INFO'),
    success: createPostfixLambda('SUCCESS'),
    ok:      createPostfixLambda('OK')
};

Echo.if = function(condition, ...msg)
{
    if(!condition)
        return condition;

    return this.echo.apply(this, msg);
};

// Only echos something to stdout if beVerbose is true
Echo.ifVerbose = function(...msg)
{
    msg.unshift(this.beVerbose);

    return this.usingPrefix(
        fixPrefix.bind(this)(this.prefix, true) + 'DEBUG',
        function(){ return this.if.apply(this, msg); }
    );
};

// Echo something and then exit
Echo.thenExit = function(...msg)
{
    msg.unshift(0);
    return this.thenBadExit.apply(this, msg);
};

Echo.thenBadExit = function(code, ...msg)
{
    this.withPostfix.exit.apply(this, msg);
    process.exit(code || 0);
};

// Function responsible for writing to the log file
Echo.toLog = function(...msg)
{
    if(!this.logFilePath)
        return;

    (msg.join('') + '\n').toEnd(this.logFilePath);
};

module.exports = Echo;
