/* global module: false */
module.exports = function(grunt) {
    'use strict';

    return {
        server: {
            options: {
                port: 7999,
                base: '_site'
            }
        }
    };
};