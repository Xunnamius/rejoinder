#!/usr/bin/env node
/*jshint esnext:true */
/*global describe, context, it, beforeEach */

/*
 * @author Xunnamius
 *
 * Echo.js BDD unit tests
 */

"use strict";

const WITHPOSTFIX_SUGAR_METHODS = [
    "skip:formatAsWarning",
    "warn:formatAsWarning",
    "error:formatAsError",
    "debug:toString",
    "exit:toString",
    "action:formatAsAction",
    "info:formatAsAction",
    "success:formatAsSuccess",
    "ok:formatAsSuccess"
];

var expect       = require('chai').expect;
var Echo         = require('../../lib/Echo/Echo');
var EmitStrategy = require('../../lib/Echo/EmitStrategy/EmitStrategy');

var the = it;

describe('Echo', function()
{
    describe('#constructor', function()
    {
        it('should have logFilePath property = null', function()
        {
            var echo = new Echo();
            expect(echo).to.have.property('logFilePath', null);
        });

        it('should have beVerbose property = false', function()
        {
            var echo = new Echo();
            expect(echo).to.have.property('beVerbose', false);
        });

        it('should have separator property = " "', function()
        {
            var echo = new Echo();
            expect(echo).to.have.property('separator', ' ');
        });

        it('should have emitStrategy property = null', function()
        {
            var echo = new Echo();
            expect(echo).to.have.property('emitStrategy', null);
        });

        context('when a prefix is not passed as an argument', function()
        {
            it('should have prefix property = null', function()
            {
                var echo = new Echo();
                expect(echo).to.have.property('prefix', null);
            });
        });

        context('when a prefix is passed as an argument', function()
        {
            it('should have prefix property = what was passed', function()
            {
                var echo = new Echo('test');
                expect(echo).to.have.property('prefix', 'test');
            });
        });

        the('logFilePath property should only be of type null or string', function()
        {
            var echo = new Echo();

            echo.logFilePath = 'string';
            expect(echo.logFilePath).to.be.a('string');
            echo.logFilePath = '';
            expect(echo.logFilePath).to.be.null;
            echo.logFilePath = { obj: 1 };
            expect(echo.logFilePath).to.be.a('string');
            echo.logFilePath = 1;
            expect(echo.logFilePath).to.be.a('string');
            echo.logFilePath = 0;
            expect(echo.logFilePath).to.be.null;
            echo.logFilePath = true;
            expect(echo.logFilePath).to.be.a('string');
            echo.logFilePath = false;
            expect(echo.logFilePath).to.be.null;
        });

        the('prefix property should only be of type null or string', function()
        {
            var echo = new Echo();

            echo.prefix = 'string';
            expect(echo.prefix).to.be.a('string');
            echo.prefix = '';
            expect(echo.prefix).to.be.null;
            echo.prefix = { obj: 1 };
            expect(echo.prefix).to.be.a('string');
            echo.prefix = 1;
            expect(echo.prefix).to.be.a('string');
            echo.prefix = 0;
            expect(echo.prefix).to.be.null;
            echo.prefix = true;
            expect(echo.prefix).to.be.a('string');
            echo.prefix = false;
            expect(echo.prefix).to.be.null;
        });

        the('beVerbose property should only be of type boolean', function()
        {
            var echo = new Echo();

            echo.beVerbose = 'string';
            expect(echo.beVerbose).to.be.true;
            echo.beVerbose = '';
            expect(echo.beVerbose).to.be.false;
            echo.beVerbose = { obj: 1 };
            expect(echo.beVerbose).to.be.true;
            echo.beVerbose = 1;
            expect(echo.beVerbose).to.be.true;
            echo.beVerbose = 0;
            expect(echo.beVerbose).to.be.false;
            echo.beVerbose = true;
            expect(echo.beVerbose).to.be.true;
            echo.beVerbose = false;
            expect(echo.beVerbose).to.be.false;
        });

        the('separator property should only be of type string', function()
        {
            var echo = new Echo();

            echo.separator = 'string';
            expect(echo.separator).to.be.a('string');
            echo.separator = '';
            expect(echo.separator).to.be.a('string');
            echo.separator = { obj: 1 };
            expect(echo.separator).to.be.a('string');
            echo.separator = 1;
            expect(echo.separator).to.be.a('string');
            echo.separator = 0;
            expect(echo.separator).to.be.a('string');
            echo.separator = true;
            expect(echo.separator).to.be.a('string');
            echo.separator = false;
            expect(echo.separator).to.be.a('string');
        });

        the('emitStrategy property should only allow an object of type EmitStrategy to be set', function()
        {
            var echo = new Echo();
            var emitStrategy = new EmitStrategy();

            expect(function()
            {
                echo.emitStrategy = function(){};
            }).to.throw(TypeError);

            expect(function()
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
                emission = str;
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
                expect(emission).to.equal('test');
            });

            it('should emit properly when called with multiple parameters', function()
            {
                echo.now('t', 'e', 's', 't');
                expect(emission).to.equal('t e s t');
            });

            it('should emit properly when called with multiple parameters of differing types', function()
            {
                echo.now('t', 3, null, 't', 'is', false);
                expect(emission).to.equal('t 3  t is false');
            });

            it('should emit properly when different prefixes are set', function()
            {
                echo.prefix = '~>';
                echo.now('test');
                expect(emission).to.equal('~> test');

                echo.prefix = 'this is my:prefix';
                echo.now('test');
                expect(emission).to.equal('this is my:prefix test');
            });

            it('should emit properly when a different separator is set', function()
            {
                echo.separator = '';
                echo.now('t', 'e', 's', 't');
                expect(emission).to.equal('test');

                echo.separator = false;
                echo.now('t', 'e', 's', 't');
                expect(emission).to.equal('test');

                echo.separator = '-';
                echo.now('t', 'e', 's', 't');
                expect(emission).to.equal('t-e-s-t');
            });
        });

        describe('#usingPredicate', function()
        {
            it('applies the predicate function to every argument', function()
            {
                echo.separator = '';
                echo.usingPredicate(function(s){ return `-${s}-`; }, 't', 'e', 's', 't');
                expect(emission).to.equal('-t--e--s--t-');
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

                expect(emission).to.equal('prefix test');
                echo.now('test');
                expect(emission).to.equal('test');
            });
        });

        describe('#if', function()
        {
            it('only emits if the supplied condition evaluates to true', function()
            {
                echo.if(false, 'test');
                expect(emission).to.be.undefined;
                echo.if(true, 'test');
                expect(emission).to.equal('test');
            });
        });

        describe('#ifVerbose', function()
        {
            it('only emits if the property beVerbose is true', function()
            {
                echo.ifVerbose('test');
                expect(emission).to.be.undefined;
                echo.beVerbose = true;
                echo.ifVerbose('test');
                expect(emission).to.equal('test');
            });
        });

        describe('#ifDebug', function()
        {
            it('emits properly only if the property beVerbose is true', function()
            {
                echo.ifDebug('test');
                expect(emission).to.be.undefined;
                echo.beVerbose = true;
                echo.ifDebug('test');
                expect(emission).to.equal('DEBUG test');
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

                expect(emission).to.equal('EXIT test');
                expect(die).to.equal(0);
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

                expect(emission).to.equal('EXIT test');
                expect(die).to.equal(1);
            });
        });

        describe('#toLog', function()
        {
            it('emits properly using the correct separator', function()
            {
                let toEnd = String.prototype.toEnd;
                let str = null;
                String.prototype.toEnd = function(s){ str = s; emission = this; };
                
                echo.logFilePath = 'testPath';
                echo.separator = '-';
                echo.toLog('test', 'the', 'rest');

                expect(emission).to.equal('test-the-rest\n');
                expect(str).to.equal('testPath');

                String.prototype.toEnd = toEnd;
            });
        });

        describe('#withPostfix', function()
        {
            it('emits using the specified postfix', function()
            {
                echo.withPostfix('postfix', 'test');
                expect(emission).to.equal('postfix test');
            });

            it('emits properly using the specified postfix and prefix separated by the correct separator', function()
            {
                echo.prefix = 'prefix';
                echo.separator = '-';
                echo.withPostfix('postfix', 'test');
                expect(emission).to.equal('prefix-postfix-test');
            });

            describe('#<sugar methods>', function()
            {
                for(let methodsig of WITHPOSTFIX_SUGAR_METHODS)
                {
                    let splt = methodsig.split(':');
                    let method = splt[0];
                    let fname = splt[1];

                    the(`${method}() emits as expected`, function()
                    {
                        echo.withPostfix[method](method);
                        expect(emission).to.equal(`${method.toUpperCase()} ` + method[fname]());
                        echo.withPostfix[method](method, method);
                        expect(emission).to.equal(`${method.toUpperCase()} ` + `${method} ${method}`[fname]());
                    });
                }
            });
        });
    });
});