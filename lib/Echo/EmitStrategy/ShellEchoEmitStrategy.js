#!/usr/bin/nodejs

/*
 * @author Xunnamius
 */

"use strict";

let shell = require('shelljs');
let EmitStrategy = require('./EmitStrategy');

class ShellEchoEmitStrategy extends EmitStrategy
{
    emit(str)
    {
        return shell.echo(str);
    }
}

module.exports = ShellEchoEmitStrategy;
