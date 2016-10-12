#!/usr/bin/nodejs

/*
 * @author Xunnamius
 */

"use strict";

const fs = require('fs');
const EmitStrategy = require('./EmitStrategy/EmitStrategy');
const colors = require('colors/safe');

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
        let logFilePath = null;
        let beVerbose = false;
        let messageSeparator = ' ';
        let postfixSeparator = ':';
        let emitStrategy = null;
        prefix = prefix || '';

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
            set(val) { prefix = !val ? '' : val.toString(); }
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
         * @property {String} messageSeparator
         *
         * The value that will be printed between the prefix and the postfix/message
         */
        Object.defineProperty(this, 'messageSeparator', {
            get() { return messageSeparator; },
            set(val) { messageSeparator = !val ? '' : val.toString(); }
        });

        /**
         * @property {String} postfixSeparator
         *
         * The value that will be printed between the postfix and the message. If
         * there is no prefix, this will return an empty string.
         */
        Object.defineProperty(this, 'postfixSeparator', {
            get() { return !!this.prefix ? postfixSeparator : ''; },
            set(val) { postfixSeparator = !val ? '' : val.toString(); }
        });

        let lambdaFactory = (postfix, fn) =>
        {
            return (...msg) => {
                if(fn)
                    return this.withPostfix(postfix, fn(msg.join(' ')));
                else
                    return this.withPostfix(postfix, ...msg);
            };
        };

        /**
         * @method withPostfix.skip
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.skip = lambdaFactory('SKIP', (msg) => colors.yellow(msg));

        /**
         * @method withPostfix.warn
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.warn = lambdaFactory('WARN', (msg) => colors.yellow.bold(msg));

        /**
         * @method withPostfix.error
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.error = lambdaFactory('ERROR', (msg) => colors.red(msg));

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
        this.withPostfix.badExit = lambdaFactory('BADEXIT', (msg) => colors.red.bold(msg));

        /**
         * @method withPostfix.action
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.action = lambdaFactory('ACTION', (msg) => colors.blue(msg));

        /**
         * @method withPostfix.info
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.info = lambdaFactory('INFO', (msg) => colors.blue.bold(msg));

        /**
         * @method withPostfix.success
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.success = lambdaFactory('SUCCESS', (msg) => colors.green(msg));

        /**
         * @method withPostfix.ok
         * @param {...String} msg  One or more strings to emit to stdout
         * @returns {*}            The result from calling withPostfix()
         */
        this.withPostfix.ok = lambdaFactory('OK', (msg) => colors.green(msg));
    }

    /**
     * Emit one or more strings to stdout right now.
     * 
     * @param {...String} msg   One or more strings to emit to stdout, separated
     * by spaces
     * @returns {*}
     */
    now(...msg)
    {
        let message = msg.join(' ');
        let separator = this.prefix.length ? this.messageSeparator : '';

        return this.emitStrategy.emit(`${this.prefix}${separator}${message}`);
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
        let oldprefix = this.prefix;
        this.prefix = prefix;
        let result = fn();
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
            this.prefix + this.postfixSeparator + 'DEBUG',
            () => this.if(...msg)
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
     * @returns {*}             The result from calling fs.appendFile()
     */
    toLog(...msg)
    {
        if(!this.logFilePath)
            return false;

        return fs.appendFileSync(this.logFilePath, msg.join(' ') + '\n', 'utf8');
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
            this.prefix + this.postfixSeparator + postfix,
            () => this.now(...msg)
        );
    }
}

module.exports = Echo;
