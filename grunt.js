module.exports = function(grunt) {
	'use strict';
	//
	// Grunt configuration:
	//
	// https://github.com/cowboy/grunt/blob/master/docs/getting_started.md
	//
	grunt.initConfig({
		img: {
			task2: {
				src: 'include/images/**/*.*',
				dest: 'build/include/images'
			}
		},
		min: {
			dist: {
				src: ['include/js/jscript.js', 'include/js/jscanvas.js'],
				dest: 'build/include/js/build.min.js',
				separator: ';'
			}
		}
	});
	grunt.loadNpmTasks('grunt-img');
	grunt.registerTask('default', 'min img');

};