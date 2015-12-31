#!/usr/bin/env node
/*jshint esnext:true */

/*
 * @author Xunnamius
 */

"use strict";

class EmitStrategy
{
    emit(str)
    {
        throw new ReferenceError('not implemented in superclass');
    }
}

module.exports = EmitStrategy;
