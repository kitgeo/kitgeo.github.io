/* global module: false */
module.exports = function(grunt) {
    'use strict';

    return {
        minified: {
            files: {
                'assets/js/kitgeo.min.js': [
                    'src/lib/jquery/dist/jquery.js',
                    'src/lib/bootstrap/dist/bootstrap.js'
                ]
            }
        }
    };
};