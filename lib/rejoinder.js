#!/usr/bin/env node

/*
 * @author Xunnamius
 *
 * Entry point for the library
 */

"use strict";

require('./Utils/string.prototype');

var exports = module.exports;

exports.Echo = require('./Echo/Echo');
exports.Echo.EmitStrategy = require('./Echo/EmitStrategy/EmitStrategy');

if(console && console.log)
    exports.Echo.EmitStrategy.ConsoleLogEmitStrategy = require('./Echo/EmitStrategy/ConsoleLogEmitStrategy');

try
{
    exports.Echo.EmitStrategy.ShellEchoEmitStrategy = require('./Echo/EmitStrategy/ShellEchoEmitStrategy');
    exports.Execute = require('./Execute/Execute');

    exports.echo = new exports.Echo();
    exports.echo.emitStrategy = new exports.Echo.EmitStrategy.ShellEchoEmitStrategy();    
}

catch(e){} // No shellJS?
