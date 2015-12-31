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
var fixPrefix = (prefix, includeColon) =>
{
    prefix = (!!prefix ? prefix : (!!this.prefix ? this.prefix : '')).toString();
    return prefix.length && includeColon ? prefix + ':' : prefix;
};

// Echos something to stdout with a prefix
class Echo
{
    constructor(prefix)
    {
        var logFilePath = null;
        var beVerbose = false;
        var separator = ' ';
        prefix = prefix || null;

        /**
         * @property {String|Boolean} logpath
         * 
         * Determines where toLog() will write out to, if anywhere all. A falsy value
         * will prevent any logs from being written.
         */
        Object.defineProperty(this, 'logFilePath', {
            get() { return logFilePath; },
            set(val) { logFilePath = !val ? null : val.toString(); }
        });

        /**
         * @property {String} prefix
         *
         * The value to prefix all messages with by default.
         */
        Object.defineProperty(this, 'prefix', {
            get() { return prefix; },
            set(val) { prefix = !val ? null : val.toString(); }
        });

        /**
         * @property {Boolean} beVerbose
         *
         * Indicates that the script should be as verbose as possible in its output
         * when true. Was formerly DEBUG_MODE.
         */
        Object.defineProperty(this, 'beVerbose', {
            get() { return beVerbose; },
            set(val) { beVerbose = !!val; }
        });

        /**
         * @property {String} separator
         *
         * The value that will be printed between the prefix and the message
         */
        Object.defineProperty(this, 'separator', {
            get() { return separator; },
            set(val) { separator = !val ? '' : val.toString(); }
        });

        var lambdaFactory = (postfix) =>
        {
            return (...msg) => {
                return this.withPostfix(postfix, msg);
            };
        };
        
        this.withPostfix.skip = lambdaFactory('SKIP');
        this.withPostfix.warn = lambdaFactory('WARN');
        this.withPostfix.error = lambdaFactory('ERROR');
        this.withPostfix.debug = lambdaFactory('DEBUG');
        this.withPostfix.exit = lambdaFactory('EXIT');
        this.withPostfix.action = lambdaFactory('ACTION');
        this.withPostfix.info = lambdaFactory('INFO');
        this.withPostfix.success = lambdaFactory('SUCCESS');
        this.withPostfix.ok = lambdaFactory('OK');
    }

    now(...msg)
    {
        var message = msg.join(' ');
        var prefix  = fixPrefix.bind(this)(this.prefix);

        return shell.echo(`${prefix}${this.separator}${message}`);
    }

    usingPredicate(predicate, ...msg)
    {
        return this.now(...msg.map(predicate));
    }

    // Run a function wherein the specified prefix is active
    withPrefix(prefix, fn)
    {
        var oldprefix = this.prefix;
        this.prefix = prefix;
        var result = fn();
        this.prefix = oldprefix;

        return result;
    }

    if(condition, ...msg)
    {
        if(!condition)
            return condition;

        return this.now(...msg);
    }

    // Only echos something to stdout if beVerbose is true
    ifVerbose(...msg)
    {
        msg.unshift(this.beVerbose);

        return this.withPrefix(
            fixPrefix.bind(this)(this.prefix, true) + 'DEBUG',
            () => { return this.if(...msg); }
        );
    }

    // Echo something and then exit
    thenExit(...msg)
    {
        msg.unshift(0);
        return this.thenBadExit(...msg);
    }

    thenBadExit(code, ...msg)
    {
        this.withPostfix.exit(...msg);
        process.exit(code || 0);
    }

    // Function responsible for writing to the log file
    toLog(...msg)
    {
        if(!this.logFilePath)
            return false;

        return (msg.join(' ') + '\n').toEnd(this.logFilePath);
    }

    withPostfix(postfix, ...msg)
    {
        return this.withPrefix(
            fixPrefix.bind(this)(this.prefix, true) + postfix,
            () => { return this.now(...msg); }
        );
    }
};

module.exports = Echo;
