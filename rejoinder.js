var shell = require('shelljs');
var colors = require('colors');

~function(exports)
{
    exports.ifDebug = function(msg)
    {
        console.log(msg);
    };

    console.log('hello, world!');
    
}(module.exports);
