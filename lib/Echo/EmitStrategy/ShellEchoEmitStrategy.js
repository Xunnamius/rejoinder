#!/usr/bin/env node
/*jshint esnext:true */

/*
 * @author Xunnamius
 */

"use strict";

var shell = require('shelljs');
var EmitStrategy = require('./EmitStrategy');

class ShellEchoEmitStrategy extends EmitStrategy
{
    emit(str)
    {
        return shell.echo(str);
    }
}

module.exports = ShellEchoEmitStrategy;
