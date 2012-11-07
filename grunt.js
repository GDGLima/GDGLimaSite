module.exports = function(grunt) {
	'use strict';
	//
	// Grunt configuration:
	//
	// https://github.com/cowboy/grunt/blob/master/docs/getting_started.md
	//
	grunt.initConfig({
		min: {
			dist: {
				src: ['include/js/jscript.js', 'include/js/jscanvas.js'],
				dest: 'build/include/js/build.min.js',
				separator: ';'
			}
		},
		smushit:{
			dir:{
				src:'include/images/',
				dest:'build/include/images/'
			}
		}
	});
	grunt.loadNpmTasks('grunt-smushit');
	grunt.registerTask('default', 'min smushit');

};