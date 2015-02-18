/* global module:false */
module.exports = function() {
    'use strict';

    return {
        css: {
            options: {
                compress: true,
                cleancss: true,
                strictImports: true
            },
            files: [{
                expand: true,
                cwd: 'src/less',
                src: [
                    'kitgeo.less'
                ],
                dest: 'assets/css',
                ext: '.min.css'
            }]
        }
    };
};