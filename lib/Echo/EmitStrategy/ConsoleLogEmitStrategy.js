#!/usr/bin/env node
/*jshint esnext:true */

/*
 * @author Xunnamius
 */

"use strict";

var EmitStrategy = require('./EmitStrategy');

class ConsoleLogEmitStrategy extends EmitStrategy
{
    emit(str)
    {
        return console.log(str);
    }
}

module.exports = ConsoleLogEmitStrategy;
