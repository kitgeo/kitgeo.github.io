/* global module: false */
module.exports = function(grunt) {
    return {
        fonts: {
            expand: true,
            cwd: 'src/fonts',
            src: '**',
            dest: 'assets/fonts'
        },
        twbsfonts: {
            expand: true,
            cwd: 'src/lib/bootstrap/fonts',
            src: '**',
            dest: 'assets/fonts'
        },
        images: {
            expand: true,
            cwd: 'src/img',
            src: '**',
            dest: 'assets/img'
        }
    };
};