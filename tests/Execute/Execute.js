#!/usr/bin/nodejs
/*global describe, context, beforeEach, it */

/*
 * @author Xunnamius
 *
 * Execute.js BDD unit tests
 */

"use strict";

let expects      = require('chai').expect;
let colors       = require('colors');
let Execute      = require('../../lib/Execute/Execute');
let Echo         = require('../../lib/Echo/Echo');
let EmitStrategy = require('../../lib/Echo/EmitStrategy/EmitStrategy');

let the = it;
let emission;

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
                execute.now('return 0');
                expects(execute.totalSuccess).to.be.true;

                execute.now('return 0', 'describe');
                expects(emission).to.equal('SUCCESS ' + colors.green('OK'));

                execute.now('return 5');
                expects(execute.totalSuccess).to.be.false;

                execute.now('return 5', 'description');
                expects(emission).to.equal('ERROR ' + colors.red('FAILED!'));

                execute._echo.beVerbose = true;

                execute.now('return 5');
                expects(emission).to.equal('ERROR ' + colors.red('FAILED!'));

                execute.now('return 0');
                expects(emission).to.equal('SUCCESS ' + colors.green('OK'));

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
                execute.butIgnoreErrors('return 5');
                expects(execute.totalSuccess).to.be.true;
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
