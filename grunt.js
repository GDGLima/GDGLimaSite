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
			}
	});
	grunt.loadNpmTasks('grunt-img');
	grunt.registerTask('default', 'img');

};