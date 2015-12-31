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
String.prototype.formatAsError = function()
{
    return colors.red(this);
};

/**
 * Allows a string to be formatted to represent an success. This method modifies
 * the String prototype and is therefore globally applied upon import.
 *
 * @return {String}
 */
String.prototype.formatAsSuccess = function()
{
    return colors.green(this);
};

/**
 * Allows a string to be formatted to represent an warning. This method modifies
 * the String prototype and is therefore globally applied upon import.
 *
 * @return {String}
 */
String.prototype.formatAsWarning = function()
{
    return colors.yellow(this);
};

/**
 * Allows a string to be formatted to represent an action This method modifies
 * the String prototype and is therefore globally applied upon import..
 *
 * @return {String}
 */
String.prototype.formatAsAction = function()
{
    return colors.blue(this);
};
