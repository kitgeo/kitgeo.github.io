/* global module:false, process:false */

module.exports = function(grunt) {
    'use strict';

    var path = require('path');
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),
        init: true,
        data: {
            pkg: grunt.file.readJSON('package.json')
        }
    });

    //grunt.loadTasks('grunt/tasks');

    grunt.registerTask('css', [
        'less'
    ]);

    grunt.registerTask('js', [
        'jshint',
        'uglify'
    ]);

    grunt.registerTask('build', [
        'copy',
        'css',
        'js',
        'jekyll'
    ]);

    grunt.registerTask('run', [
        'build',
        'connect',
        'watch'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};