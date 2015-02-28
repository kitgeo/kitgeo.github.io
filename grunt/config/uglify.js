/* global module: false */
module.exports = function(grunt) {
    'use strict';

    return {
        minified: {
            files: {
                'assets/js/kitgeo.index.min.js': [
                    'src/lib/jquery/dist/jquery.js',
                    'src/lib/jquery.stellar/src/jquery.stellar.js',
                    'src/lib/jQuery-Form-Validator/form-validator/jquery.form-validator.js',
                    'src/lib/bootstrap/dist/js/bootstrap.js',
                    'src/js/index.js'
                ]
            }
        }
    };
};