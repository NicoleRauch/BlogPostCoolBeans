module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    mocha_istanbul: {
      test: {
        src: 'test',
        options: {
          timeout: 6000,
          slow: 100,
          mask: '**/*.js',
          root: 'lib',
          reporter: 'spec'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-istanbul');

  grunt.registerTask('tests', ['mocha_istanbul']);

  // Default task.
  grunt.registerTask('default', ['tests']);
};
