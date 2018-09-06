#!/usr/bin/nodejs
/*global describe, context, it, beforeEach */

/*
 * @author Xunnamius
 *
 * Echo.js BDD unit tests
 */

"use strict";

const WITHPOSTFIX_SUGAR_METHODS = [
    "skip",
    "warn",
    "error",
    "debug",
    "exit",
    "badExit",
    "action",
    "info",
    "success",
    "ok"
];

const fs           = require('fs');
const expects      = require('chai').expect;
const colors       = require('colors/safe');
const Echo         = require('../../lib/Echo/Echo');
const EmitStrategy = require('../../lib/Echo/EmitStrategy/EmitStrategy');

const the = it;

describe('Echo', function()
{
    describe('#constructor', function()
    {
        it('should have logFilePath property = null', function()
        {
            let echo = new Echo();
            expects(echo).to.have.property('logFilePath', null);
        });

        it('should have beVerbose property = false', function()
        {
            let echo = new Echo();
            expects(echo).to.have.property('beVerbose', false);
        });

        it('should have messageSeparator property = " "', function()
        {
            let echo = new Echo();
            expects(echo).to.have.property('messageSeparator', ' ');
        });

        it('should have postfixSeparator property = "" when prefix is falsey', function()
        {
            let echo = new Echo();
            expects(echo).to.have.property('postfixSeparator', '');
            echo.prefix = '';
            expects(echo).to.have.property('postfixSeparator', '');
            echo.prefix = false;
            expects(echo).to.have.property('postfixSeparator', '');
        });

        it('should have postfixSeparator property = ":" when prefix is truthy', function()
        {
            let echo = new Echo();
            echo.prefix = 'yes';
            expects(echo).to.have.property('postfixSeparator', ':');
            echo.prefix = true;
            expects(echo).to.have.property('postfixSeparator', ':');
        });

        it('should have emitStrategy property = null', function()
        {
            let echo = new Echo();
            expects(echo).to.have.property('emitStrategy', null);
        });

        context('when a prefix is not passed as an argument', function()
        {
            it('should have prefix property = ""', function()
            {
                let echo = new Echo();
                expects(echo).to.have.property('prefix', '');
            });
        });

        context('when a prefix is passed as an argument', function()
        {
            it('should have prefix property = what was passed', function()
            {
                let echo = new Echo('test');
                expects(echo).to.have.property('prefix', 'test');
            });
        });

        the('logFilePath property should only be of type null or string', function()
        {
            let echo = new Echo();

            echo.logFilePath = 'string';
            expects(echo.logFilePath).to.be.a('string');
            echo.logFilePath = '';
            expects(echo.logFilePath).to.be.null;
            echo.logFilePath = { obj: 1 };
            expects(echo.logFilePath).to.be.a('string');
            echo.logFilePath = 1;
            expects(echo.logFilePath).to.be.a('string');
            echo.logFilePath = 0;
            expects(echo.logFilePath).to.be.null;
            echo.logFilePath = true;
            expects(echo.logFilePath).to.be.a('string');
            echo.logFilePath = false;
            expects(echo.logFilePath).to.be.null;
        });

        the('prefix property should only be of type string', function()
        {
            let echo = new Echo();

            echo.prefix = 'string';
            expects(echo.prefix).to.be.a('string');
            echo.prefix = '';
            expects(echo.prefix).to.be.a('string');
            echo.prefix = { obj: 1 };
            expects(echo.prefix).to.be.a('string');
            echo.prefix = 1;
            expects(echo.prefix).to.be.a('string');
            echo.prefix = 0;
            expects(echo.prefix).to.be.a('string');
            echo.prefix = true;
            expects(echo.prefix).to.be.a('string');
            echo.prefix = false;
            expects(echo.prefix).to.be.a('string');
        });

        the('beVerbose property should only be of type boolean', function()
        {
            let echo = new Echo();

            echo.beVerbose = 'string';
            expects(echo.beVerbose).to.be.true;
            echo.beVerbose = '';
            expects(echo.beVerbose).to.be.false;
            echo.beVerbose = { obj: 1 };
            expects(echo.beVerbose).to.be.true;
            echo.beVerbose = 1;
            expects(echo.beVerbose).to.be.true;
            echo.beVerbose = 0;
            expects(echo.beVerbose).to.be.false;
            echo.beVerbose = true;
            expects(echo.beVerbose).to.be.true;
            echo.beVerbose = false;
            expects(echo.beVerbose).to.be.false;
        });

        the('messageSeparator property should only be of type string', function()
        {
            let echo = new Echo();

            echo.messageSeparator = 'string';
            expects(echo.messageSeparator).to.be.a('string');
            echo.messageSeparator = '';
            expects(echo.messageSeparator).to.be.a('string');
            echo.messageSeparator = { obj: 1 };
            expects(echo.messageSeparator).to.be.a('string');
            echo.messageSeparator = 1;
            expects(echo.messageSeparator).to.be.a('string');
            echo.messageSeparator = 0;
            expects(echo.messageSeparator).to.be.a('string');
            echo.messageSeparator = true;
            expects(echo.messageSeparator).to.be.a('string');
            echo.messageSeparator = false;
            expects(echo.messageSeparator).to.be.a('string');
        });

        the('postfixSeparator property should only be of type string', function()
        {
            let echo = new Echo();

            echo.postfixSeparator = 'string';
            expects(echo.postfixSeparator).to.be.a('string');
            echo.postfixSeparator = '';
            expects(echo.postfixSeparator).to.be.a('string');
            echo.postfixSeparator = { obj: 1 };
            expects(echo.postfixSeparator).to.be.a('string');
            echo.postfixSeparator = 1;
            expects(echo.postfixSeparator).to.be.a('string');
            echo.postfixSeparator = 0;
            expects(echo.postfixSeparator).to.be.a('string');
            echo.postfixSeparator = true;
            expects(echo.postfixSeparator).to.be.a('string');
            echo.postfixSeparator = false;
            expects(echo.postfixSeparator).to.be.a('string');
        });

        the('emitStrategy property should only allow an object of type EmitStrategy to be set', function()
        {
            let echo = new Echo();
            let emitStrategy = new EmitStrategy();

            expects(function()
            {
                echo.emitStrategy = function(){};
            }).to.throw(TypeError);

            expects(function()
            {
                echo.emitStrategy = emitStrategy;
            }).to.not.throw(TypeError);
        });
    });
    
    context('(with TestEmitStrategy as the emitStrategy)', function()
    {
        let emission;
        let echo;

        let TestEmitStrategy = class extends EmitStrategy
        {
            emit(str)
            {
                emission = colors.strip(str);
            }
        };

        beforeEach(function()
        {
            echo = new Echo();
            echo.emitStrategy = new TestEmitStrategy();
            emission = undefined;
        });

        describe('#now', function()
        {
            it('should emit just the message when called with no prefix', function()
            {
                echo.now('test');
                expects(emission).to.equal('test');
            });

            it('should emit properly when called with multiple parameters', function()
            {
                echo.now('t', 'e', 's', 't');
                expects(emission).to.equal('t e s t');
            });

            it('should emit properly when called with multiple parameters of differing types', function()
            {
                echo.now('t', 3, null, 't', 'is', false);
                expects(emission).to.equal('t 3  t is false');
            });

            it('should emit properly when different prefixes are set', function()
            {
                echo.prefix = '~>';
                echo.now('test');
                expects(emission).to.equal('~> test');

                echo.prefix = 'this is my:prefix';
                echo.now('test');
                expects(emission).to.equal('this is my:prefix test');
            });

            it('should emit properly when a different messageSeparator is set', function()
            {
                echo.messageSeparator = '';
                echo.now('t', 'e', 's', 't');
                expects(emission).to.equal('t e s t');

                echo.messageSeparator = false;
                echo.now('t', 'e', 's', 't');
                expects(emission).to.equal('t e s t');

                echo.messageSeparator = '-';
                echo.now('t', 'e', 's', 't');
                expects(emission).to.equal('t e s t');
            });

            it('should emit properly with a set prefix when a different messageSeparator is set', function()
            {
                echo.prefix = '>>';

                echo.messageSeparator = '';
                echo.now('t', 'e', 's', 't');
                expects(emission).to.equal('>>t e s t');

                echo.messageSeparator = false;
                echo.now('t', 'e', 's', 't');
                expects(emission).to.equal('>>t e s t');

                echo.messageSeparator = '-';
                echo.now('t', 'e', 's', 't');
                expects(emission).to.equal('>>-t e s t');
            });
        });

        describe('#usingPredicate', function()
        {
            it('applies the predicate function to every argument', function()
            {
                echo.messageSeparator = '';
                echo.usingPredicate(function(s){ return `-${s}-`; }, 't', 'e', 's', 't');
                expects(emission).to.equal('-t- -e- -s- -t-');
            });
        });

        describe('#withPrefix', function()
        {
            it('defines prefix only in the context of calls made from within the callback', function()
            {
                echo.withPrefix('prefix', function()
                {
                    echo.now('test');
                });

                expects(emission).to.equal('prefix test');
                echo.now('test');
                expects(emission).to.equal('test');
            });
        });

        describe('#if', function()
        {
            it('only emits if the supplied condition evaluates to true', function()
            {
                echo.if(false, 'test');
                expects(emission).to.be.undefined;
                echo.if(true, 'test');
                expects(emission).to.equal('test');
            });
        });

        describe('#ifVerbose', function()
        {
            it('only emits if the property beVerbose is true', function()
            {
                echo.ifVerbose('test');
                expects(emission).to.be.undefined;
                echo.beVerbose = true;
                echo.ifVerbose('test');
                expects(emission).to.equal('test');
            });
        });

        describe('#ifDebug', function()
        {
            it('emits properly only if the property beVerbose is true', function()
            {
                echo.ifDebug('test');
                expects(emission).to.be.undefined;
                echo.beVerbose = true;
                echo.ifDebug('test');
                expects(emission).to.equal('DEBUG test');
            });
        });

        describe('#thenExit', function()
        {
            it('emits and then exits with exit code 0', function()
            {
                let exit = process.exit;
                let die  = -1;
                process.exit = function(code){ die = code; };
                echo.thenExit('test');
                process.exit = exit;

                expects(emission).to.equal('EXIT test');
                expects(die).to.equal(0);
            });
        });

        describe('#thenBadExit', function()
        {
            it('emits and then exits with the specified exit code', function()
            {
                let exit = process.exit;
                let die  = -1;
                process.exit = function(code){ die = code; };
                echo.thenBadExit(1, 'test');
                process.exit = exit;

                expects(emission).to.equal('BADEXIT ' + 'test');
                expects(die).to.equal(1);
            });
        });

        describe('#toLog', function()
        {
            it('emits properly using the correct separator', function()
            {
                let rand = Math.random();
                
                echo.logFilePath = 'test.log';
                echo.messageSeparator = '-';
                echo.toLog(rand);
                
                let contents = fs.readFileSync(echo.logFilePath).toString('utf8');
                fs.unlinkSync(echo.logFilePath);

                expects(contents).to.equal(`${rand}\n`);
            });
        });

        describe('#withPostfix', function()
        {
            it('emits using the specified postfix', function()
            {
                echo.withPostfix('postfix', 'test');
                expects(emission).to.equal('postfix test');
            });

            it('emits properly using the specified postfix and prefix separated by the correct separator', function()
            {
                echo.prefix = 'prefix';
                echo.messageSeparator = '-';
                echo.postfixSeparator = '-';
                echo.withPostfix('postfix', 'test');
                expects(emission).to.equal('prefix-postfix-test');
                echo.postfixSeparator = '';
                echo.withPostfix('postfix', 'test');
                expects(emission).to.equal('prefixpostfix-test');
                echo.messageSeparator = '';
                echo.withPostfix('postfix', 'test');
                expects(emission).to.equal('prefixpostfixtest');
            });

            describe('#<sugar methods>', function()
            {
                for(let method of WITHPOSTFIX_SUGAR_METHODS)
                {
                    the(`${method}() emits something`, function()
                    {
                        emission = null;
                        echo.withPostfix[method](method);
                        expects(emission).to.not.be.null;
                    });
                }
            });
        });
    });
});
