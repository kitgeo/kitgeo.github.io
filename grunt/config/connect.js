/* global module: false */
module.exports = function(grunt) {
    'use strict';

    return {
        watch: {
            options: {
                port: 7999,
                base: '_site'
            }
        },
        server: {
            options: {
                port: 7999,
                base: '_site',
                keepalive: true
            }
        }
    };
};