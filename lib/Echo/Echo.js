#!/usr/bin/nodejs --harmony
/*jshint esnext:true */

/*
 * @author Xunnamius
 */

"use strict";

require('../Utils/string.prototype');
var EmitStrategy = require('./EmitStrategy/EmitStrategy');

/**
 * @private
 * Private helper function that makes sure any received prefix is formatted properly
 *
 * @param {String} prefix               A prefix that will appear before the emission
 * @param {Boolean} [includeSeparator]  Whether to include the separator between
 * the postfix and the prefix
 *
 * @return {String}                     The new prefix
 */
var fixPrefix;

/**
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
        var emitStrategy = null;
        prefix = prefix || null;

        /**
         * @property {Function} emitStrategy
         * 
         * Determines how the Echo object will emit its message(s)
         */
         Object.defineProperty(this, 'emitStrategy', {
            get() { return emitStrategy; },
            set(val)
            {
                if(!(val instanceof EmitStrategy))
                    throw new TypeError('emitStrategy must be instance of EmitStrategy');

                emitStrategy = val;
            }
        });

        /**
         * @property {String} logFilePath
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

        var lambdaFactory = (postfix, fname) =>
        {
            return (...msg) => {
                if(fname)
                    return this.withPostfix(postfix, msg.join(this.separator)[fname]());
                else
                    return this.withPostfix(postfix, ...msg);
            };
        };

        /**
         * @method withPostfix.skip
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.skip = lambdaFactory('SKIP', 'formatAsWarning');

        /**
         * @method withPostfix.warn
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.warn = lambdaFactory('WARN', 'formatAsWarning');

        /**
         * @method withPostfix.error
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.error = lambdaFactory('ERROR', 'formatAsError');

        /**
         * @method withPostfix.debug
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.debug = lambdaFactory('DEBUG');

        /**
         * @method withPostfix.exit
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.exit = lambdaFactory('EXIT');

        /**
         * @method withPostfix.badExit
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.badExit = lambdaFactory('BADEXIT', 'formatAsError');

        /**
         * @method withPostfix.action
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.action = lambdaFactory('ACTION', 'formatAsAction');

        /**
         * @method withPostfix.info
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.info = lambdaFactory('INFO', 'formatAsInformation');

        /**
         * @method withPostfix.success
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.success = lambdaFactory('SUCCESS', 'formatAsSuccess');

        /**
         * @method withPostfix.ok
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.ok = lambdaFactory('OK', 'formatAsSuccess');

        fixPrefix = (prefix, includeSeparator) =>
        {
            prefix = (!!prefix ? prefix : (!!this.prefix ? this.prefix : '')).toString();
            return prefix.length && includeSeparator ? prefix + this.separator : prefix;
        };
    }

    /**
     * Emit one or more strings to stdout right now.
     * 
     * @param {...String} msg   One or more strings to emit to stdout
     * @returns {*}             The result from calling shelljs.echo
     */
    now(...msg)
    {
        var message = msg.join(this.separator);
        var prefix  = fixPrefix(this.prefix);
        var separator = prefix.length ? this.separator : '';

        return this.emitStrategy.emit(`${prefix}${separator}${message}`);
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
        return this.if(...msg);
    }

    /**
     * Emit one or more strings to stdout if and only if beVerbose is true.
     * Emission will occur as if called by Echo.withPostfix.debug().
     *
     * @param {...String} msg   One or more strings to emit to stdout 
     * @returns {*}             The result from calling withPrefix()
     */
    ifDebug(...msg)
    {
        msg.unshift(this.beVerbose);

        return this.withPrefix(
            fixPrefix(this.prefix, true) + 'DEBUG',
            () => { return this.if(...msg); }
        );
    }

    /**
     * Emit one or more strings to stdout and then exit with code 0.
     * Emission will occur as if called by Echo.withPostfix.exit().
     * 
     * @param {...String} msg   One or more strings to emit to stdout
     * @returns {*}             The result from calling thenBadExit()
     */
    thenExit(...msg)
    {
        this.withPostfix.exit(...msg);
        process.exit(0);
    }

    /**
     * Emit one or more strings to stdout and then exit with a custom error code.
     * Emission will occur as if called by Echo.withPostfix.badExit().
     * 
     * @param {Integer} code    The status code to exit the process with
     * @param {...String} msg   One or more strings to emit to stdout
     */
    thenBadExit(code, ...msg)
    {
        this.withPostfix.badExit(...msg);
        process.exit(code || 1);
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

        return (msg.join(this.separator) + '\n').toEnd(this.logFilePath);
    }

    /**
     * Emit one or more strings to stdout with an additional prefix applied.
     *
     * @param {String} postfix  A prefix that will appear before the emission
     * @param {...String} msg   One or more strings to emit to stdout
     * @returns {*}             The result from calling withPrefix()
     */
    withPostfix(postfix, ...msg)
    {
        return this.withPrefix(
            fixPrefix(this.prefix, true) + postfix,
            () => { return this.now(...msg); }
        );
    }
}

module.exports = Echo;
