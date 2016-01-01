#!/usr/bin/env node
/*jshint esnext:true */
/*global describe, context, beforeEach, it */

/*
 * @author Xunnamius
 *
 * Execute.js BDD unit tests
 */

"use strict";

var expects      = require('chai').expect;
var colors       = require('../../lib/Utils/string.prototype').colors;
var Execute      = require('../../lib/Execute/Execute');
var Echo         = require('../../lib/Echo/Echo');
var EmitStrategy = require('../../lib/Echo/EmitStrategy/EmitStrategy');

var the = it;
var emission;

class TestEmitStrategy extends EmitStrategy
{
    emit(str)
    {
        emission = str;
    }
}

describe('Execute', function()
{
    let execute;

    beforeEach(function()
    {
        let echo = new Echo();
        echo.emitStrategy = new TestEmitStrategy();
        execute = new Execute(echo);
    });

    describe('#constructor', function()
    {
        it('will throw a TypeError if not passed an Echo instance', function()
        {
            expects(function(){ new Execute(); }).to.throw(TypeError);
        });

        it('stores the echo instance on the _echo property and is accessible', function()
        {
            expects(execute._echo).to.be.an.instanceof(Echo);
        });

        it('should have totalSuccess property = true', function()
        {
            expects(execute.totalSuccess).to.be.true;
        });

        the('totalSuccess property = true when set to true', function()
        {
            execute.totalSuccess = true;
            expects(execute.totalSuccess).to.be.true;
        });

        the('totalSuccess property = false when set to false', function()
        {
            execute.totalSuccess = false;
            expects(execute.totalSuccess).to.be.false;
        });

        the('totalSuccess property = false when attempting to set true after being set to false', function()
        {
            execute.totalSuccess = false;
            execute.totalSuccess = true;
            expects(execute.totalSuccess).to.be.false;
        });
    });

    context('(with prebuilt Echo and EmitStrategy)', function()
    {
        describe('#now', function()
        {
            it('executes commands and outputs as expected', function()
            {
                let result = execute.now('return 0');
                expects(execute.totalSuccess).to.be.true;
                expects(result).to.be.true;

                execute.now('return 0', 'describe');
                expects(emission).to.equal(colors.green('OK'));

                result = execute.now('return 5');
                expects(execute.totalSuccess).to.be.false;
                expects(result).to.be.false;

                result = execute.now('return 5', 'description');
                expects(emission).to.equal('ERROR ' + colors.red('FAILED!'));

                execute._echo.beVerbose = true;

                execute.now('return 5');
                expects(emission).to.equal('DEBUG ' + colors.red('FAILED!'));

                execute.now('return 0');
                expects(emission).to.equal('DEBUG ' + colors.green('OK'));

                expects(execute.totalSuccess).to.be.false;
            });

            it("calls Echo's logging functions", function()
            {
                let wascalled = false;
                execute._echo.toLog = function(){ wascalled = true; };
                execute._echo.logFilePath = 'test';
                execute.now('return 0');
                expects(wascalled).to.be.true;
            });
        });

        describe('#butIgnoreErrors', function()
        {
            it('executes commands but does not get angry on exit status != 0', function()
            {
                let result = execute.butIgnoreErrors('return 5');
                expects(execute.totalSuccess).to.be.true;
                expects(result).to.be.true;
            });
        });

        describe('#withoutLogging', function()
        {
            it('executes commands but does not call any logging function', function()
            {
                let logFilePathEmpty = false;
                execute._echo.toLog = function(){ logFilePathEmpty = !!this.logFilePath; };
                execute._echo.logFilePath = 'test';
                execute.withoutLogging('return 0');
                expects(logFilePathEmpty).to.be.false;
            });
        });
    });
});
