#!/usr/bin/nodejs
/*jshint esnext:true */

/*
 * @author Xunnamius
 */

"use strict";

let EmitStrategy = require('./EmitStrategy');

class ConsoleLogEmitStrategy extends EmitStrategy
{
    emit(str)
    {
        return console.log(str);
    }
}

module.exports = ConsoleLogEmitStrategy;
