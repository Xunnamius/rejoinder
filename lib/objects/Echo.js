#!/usr/bin/env node
/*jshint esnext:true */

/*
 * @author Xunnamius
 */

"use strict";

var shell = require('shelljs');
require('../utils/stringforms.js');

/**
 * @private
 * Private helper function that makes sure any received prefix is formatted properly
 *
 * @param {String} prefix           A prefix that will appear before the emission
 * @param {Boolean} [includeColon]  Whether to include a colon between the postfix
 * and the prefix
 *
 * @return {String}                 The new prefix
 */
var fixPrefix = (prefix, includeColon) =>
{
    prefix = (!!prefix ? prefix : (!!this.prefix ? this.prefix : '')).toString();
    return prefix.length && includeColon ? prefix + ':' : prefix;
};

/**
 * @namespace Echo
 * The Echo class exposes an API for echoing out to stdoutin a clean and concise
 * manner.
 */
class Echo
{
    /**
     * @param {String} [prefix]  An optional prefix that will appear before each
     * emission to stdout
     */
    constructor(prefix)
    {
        var logFilePath = null;
        var beVerbose = false;
        var separator = ' ';
        prefix = prefix || null;

        /**
         * @member {String} logFilePath
         * 
         * Determines where toLog() will write out to, if anywhere all. A falsy value
         * will prevent any logs from being written.
         */
        Object.defineProperty(this, 'logFilePath', {
            get() { return logFilePath; },
            set(val) { logFilePath = !val ? null : val.toString(); }
        });

        /**
         * @member {String} prefix
         *
         * The value to prefix all messages with by default.
         */
        Object.defineProperty(this, 'prefix', {
            get() { return prefix; },
            set(val) { prefix = !val ? null : val.toString(); }
        });

        /**
         * @member {Boolean} beVerbose
         *
         * Indicates that the script should be as verbose as possible in its output
         * when true. Was formerly DEBUG_MODE.
         */
        Object.defineProperty(this, 'beVerbose', {
            get() { return beVerbose; },
            set(val) { beVerbose = !!val; }
        });

        /**
         * @member {String} separator
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

        /**
         * @method skip
         * @memberof withPostfix
         * @instance
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.skip = lambdaFactory('SKIP');

        /**
         * @method warn
         * @memberof withPostfix
         * @instance
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.warn = lambdaFactory('WARN');

        /**
         * @method error
         * @memberof withPostfix
         * @instance
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.error = lambdaFactory('ERROR');

        /**
         * @method debug
         * @memberof withPostfix
         * @instance
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.debug = lambdaFactory('DEBUG');

        /**
         * @method exit
         * @memberof withPostfix
         * @instance
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.exit = lambdaFactory('EXIT');

        /**
         * @method action
         * @memberof withPostfix
         * @instance
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.action = lambdaFactory('ACTION');

        /**
         * @method info
         * @memberof withPostfix
         * @instance
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.info = lambdaFactory('INFO');

        /**
         * @method success
         * @memberof withPostfix
         * @instance
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.success = lambdaFactory('SUCCESS');

        /**
         * @method ok
         * @memberof withPostfix
         * @instance
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.ok = lambdaFactory('OK');
    }

    /**
     * Emit one or more strings to stdout right now.
     * 
     * @param {...String} msg   One or more strings to emit to stdout
     * @returns {*}             The result from calling shelljs.echo
     */
    now(...msg)
    {
        var message = msg.join(' ');
        var prefix  = fixPrefix.bind(this)(this.prefix);

        return shell.echo(`${prefix}${this.separator}${message}`);
    }

    /**
     * Emit one or more strings to stdout after applying a predicate function to
     * each string.
     *
     * @param {Function} predicate  Function that will be applied to all strings
     * in msg
     * @param {...String} msg       One or more strings to emit to stdout
     * @returns {*}                 The result from calling now()
     */
    usingPredicate(predicate, ...msg)
    {
        return this.now(...msg.map(predicate));
    }

    /**
     * Switches the prefix temporarily. Only the code in the callback will respect
     * the new prefix. Once the callback finishes executing, the prefix will
     * revert back to its previous value.
     *
     * @param {String} prefix   A prefix that will appear before each emission to
     * sdout
     * @param {Function} fn     A callback function wherein the prefix takes effect
     * @returns {*}             The result from calling fn()
     */
    withPrefix(prefix, fn)
    {
        var oldprefix = this.prefix;
        this.prefix = prefix;
        var result = fn();
        this.prefix = oldprefix;

        return result;
    }

    /**
     * Emit one or more strings to stdout if and only if some condition is met.
     *
     * @param {Boolean} condition   A condition to evaluate
     * @param {...String} msg       One or more strings to emit to stdout
     * @returns {*}                 The result from calling now()
     */
    if(condition, ...msg)
    {
        if(!condition)
            return condition;

        return this.now(...msg);
    }

    /**
     * Emit one or more strings to stdout if and only if beVerbose is true.
     *
     * @param {...String} msg   One or more strings to emit to stdout 
     * @returns {*}             The result from calling withPrefix()
     */
    ifVerbose(...msg)
    {
        msg.unshift(this.beVerbose);

        return this.withPrefix(
            fixPrefix.bind(this)(this.prefix, true) + 'DEBUG',
            () => { return this.if(...msg); }
        );
    }

    /**
     * Emit one or more strings to stdout and then exit with code 0.
     *
     * @param {...String} msg   One or more strings to emit to stdout
     * @returns {*}             The result from calling thenBadExit()
     */
    thenExit(...msg)
    {
        msg.unshift(0);
        return this.thenBadExit(...msg);
    }

    /**
     * Emit one or more strings to stdout and then exit with a custom error code.
     *
     * @param {Integer} code    The status code to exit the process with
     * @param {...String} msg   One or more strings to emit to stdout
     */
    thenBadExit(code, ...msg)
    {
        this.withPostfix.exit(...msg);
        process.exit(code || 0);
    }

    /**
     * Write one or more strings to a file.
     *
     * @param {...String} msg   One or more strings to emit to stdout
     * @returns {*}             The result from calling fs.toEnd()
     */
    toLog(...msg)
    {
        if(!this.logFilePath)
            return false;

        return (msg.join(' ') + '\n').toEnd(this.logFilePath);
    }

    /**
     * @namespace withPostfix
     * @memberof Echo
     * 
     * Emit one or more strings to stdout with an additional prefix applied.
     *
     * @param {String} postfix  A prefix that will appear before the emission
     * @param {...String} msg   One or more strings to emit to stdout
     * @returns {*}             The result from calling withPrefix()
     */
    withPostfix(postfix, ...msg)
    {
        return this.withPrefix(
            fixPrefix.bind(this)(this.prefix, true) + postfix,
            () => { return this.now(...msg); }
        );
    }
}

module.exports = Echo;
