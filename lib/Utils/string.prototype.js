#!/usr/bin/env node
/*jshint esnext:true */

/*
 * @author Xunnamius
 */

"use strict";

var noop = function(arg){ return arg; };
var colors = { red: noop, green: noop, yellow: noop, blue: noop };

try
{
    // Try to import the optional packages. If the import fails... well, whatever.
    colors = require('colors');
}
catch(e){}

/**
 * Allows a string to be formatted to represent an error. This method modifies
 * the String prototype and is therefore globally applied upon import.
 *
 * @return {String}
 */
String.prototype.formatAsError = function(dontIncludePrefix)
{
    return colors.red((!dontIncludePrefix ? 'ERROR: ' : '' ) + this);
};

/**
 * Allows a string to be formatted to represent an success. This method modifies
 * the String prototype and is therefore globally applied upon import.
 *
 * @return {String}
 */
String.prototype.formatAsSuccess = function(dontIncludePrefix)
{
    return colors.green((!dontIncludePrefix ? 'SUCCESS: ' : '' ) + this);
};

/**
 * Allows a string to be formatted to represent an warning. This method modifies
 * the String prototype and is therefore globally applied upon import.
 *
 * @return {String}
 */
String.prototype.formatAsWarning = function(dontIncludePrefix)
{
    return colors.yellow((!dontIncludePrefix ? 'WARNING: ' : '' ) + this);
};

/**
 * Allows a string to be formatted to represent an action This method modifies
 * the String prototype and is therefore globally applied upon import..
 *
 * @return {String}
 */
String.prototype.formatAsAction = function(dontIncludePrefix)
{
    return colors.blue((!dontIncludePrefix ? 'ACTION: ' : '' ) + this);
};

module.exports.colors = colors;
