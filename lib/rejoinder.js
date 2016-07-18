#!/usr/bin/nodejs
/*jshint esnext:true */

/*
 * @author Xunnamius
 *
 * Entry point for the library
 */

"use strict";

let xports = module.exports;

xports.Echo = require('./Echo/Echo');
xports.Echo.EmitStrategy = require('./Echo/EmitStrategy/EmitStrategy');

if(console && console.log)
    xports.Echo.EmitStrategy.ConsoleLogEmitStrategy = require('./Echo/EmitStrategy/ConsoleLogEmitStrategy');

try
{
    xports.Echo.EmitStrategy.ShellEchoEmitStrategy = require('./Echo/EmitStrategy/ShellEchoEmitStrategy');
    xports.Execute = require('./Execute/Execute');

    xports.echo = new xports.Echo();
    xports.echo.emitStrategy = new xports.Echo.EmitStrategy.ShellEchoEmitStrategy();

    xports.execute = new xports.Execute(xports.echo);
}

catch(e){} // No shellJS?
