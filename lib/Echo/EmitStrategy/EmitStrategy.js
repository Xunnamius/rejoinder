#!/usr/bin/nodejs

/*
 * @author Xunnamius
 */

"use strict";

class EmitStrategy
{
    emit()
    {
        throw new ReferenceError('not implemented in superclass');
    }
}

module.exports = EmitStrategy;
