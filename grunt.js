module.exports = function(grunt) {
	'use strict';
	//
	// Grunt configuration:
	//
	// https://github.com/cowboy/grunt/blob/master/docs/getting_started.md
	//
	grunt.initConfig({
		copy: {
			dist: {
				files: {
					"build/include/": "include/**",
					"build/":["icono.ico"]
				}
			}
		},
		min: {
			dist: {
				src: [	'include/js/jquery.min.js',
						'include/js/easeljs-0.5.0.min.js',
						'include/js/jscript.js',
						'include/js/jscanvas.js',
						'include/js/moderator-api.js'],
				dest: 'build/include/js/build.min.js',
				separator: ';'
			}
		},
		recess: {
			dist: {
				src: ['include/css/styles.css','include/css/reset.css'],
				dest: 'build/include/css/styles.css',
				options: {
					compile: true,
					compress:true
				}
			}
		},
		smushit: {
			dir: {
				src: 'include/images/',
				dest: 'build/include/images/'
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib');
	grunt.loadNpmTasks('grunt-recess');
	grunt.loadNpmTasks('grunt-smushit');
	grunt.registerTask('default', 'copy min recess smushit');

};