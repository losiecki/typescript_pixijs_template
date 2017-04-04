var Builder = require('systemjs-builder');
var builder = new Builder('./', './config.js');

builder.buildStatic('./build/tsc/Main.js', './build/js/bundle.js', {
    minify: true, sourceMaps: true
});