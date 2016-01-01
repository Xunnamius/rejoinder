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
 * @param {Boolean} [includePrefix]
 * @return {String}
 */
String.prototype.formatAsError = function(includePrefix)
{
    return colors.red((includePrefix ? 'ERROR: ' : '') + this);
};

/**
 * Allows a string to be formatted to represent an success. This method modifies
 * the String prototype and is therefore globally applied upon import.
 * 
 * @param {Boolean} [includePrefix]
 * @return {String}
 */
String.prototype.formatAsSuccess = function(includePrefix)
{
    return colors.green((includePrefix ? 'SUCCESS: ' : '') + this);
};

/**
 * Allows a string to be formatted to represent an warning. This method modifies
 * the String prototype and is therefore globally applied upon import.
 * 
 * @param {Boolean} [includePrefix]
 * @return {String}
 */
String.prototype.formatAsWarning = function(includePrefix)
{
    return colors.yellow((includePrefix ? 'WARNING: ' : '') + this);
};

/**
 * Allows a string to be formatted to represent an action This method modifies
 * the String prototype and is therefore globally applied upon import..
 * 
 * @param {Boolean} [includePrefix]
 * @return {String}
 */
String.prototype.formatAsAction = function(includePrefix)
{
    return colors.blue((includePrefix ? 'ACTION: ' : '') + this);
};
