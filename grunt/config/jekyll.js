/* global module:false */
module.exports = function(grunt) {
    'use strict';

    return {
        options: {
            src: '.',
            config: '_config.yml'
        },
        site: {
            options: {
                dest: './_site'
            }
        }
    };
};