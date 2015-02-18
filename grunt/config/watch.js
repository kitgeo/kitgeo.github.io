/* global module:false */
module.exports = function(grunt) {
    'use strict';

    return {
        src: {
            files: [
                '**/*.html',
                '**/*.md',
                'src/**/*.js',
                'src/less/**/*.less'
            ],
            tasks: [
                'build'
            ],
            options: {
                spawn: false
            }
        }
    };
};