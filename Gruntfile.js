module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    concat: {
      copy : {
        src: ['toastbox.js'],
        dest: 'dist/toastbox.js'
      },

      locales: {
        src: ['templates/umd-header-locales.txt', 'locales/**/*.js', 'templates/umd-footer.txt'],
        dest: 'dist/toastbox.locales.js'
      },

      all : {
        src: ['toastbox.js', 'dist/toastbox.locales.js'],
        dest: 'dist/toastbox.all.js'
      },

      license : {
        src: ['LICENSE.md'],
        dest: 'dist/LICENSE.md'
      },
    },

    jsbeautifier : {
      src : ['dist/toastbox.locales.js','dist/toastbox.all.js'],
      options:{
        js: {
          indentSize: 2
        }
      }
    },

    uglify: {
      options: {
        compress: true,
        mangle: true,
        banner: grunt.file.read('header.txt'),
        output:{
          quote_style: 3
        }
      },
      my_target: {
        files: {
          'dist/toastbox.min.js': ['dist/toastbox.js'],
          'dist/toastbox.locales.min.js': ['dist/toastbox.locales.js'],
          'dist/toastbox.all.min.js': ['dist/toastbox.all.js']
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        force: true
      },
      all: ['dist/toastbox.js', 'dist/toastbox.locales.js']
    },

    karma: {
      current: {
        configFile: 'karma.conf.js'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks("grunt-jsbeautifier");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['concat', 'jsbeautifier', 'uglify', 'jshint', 'karma']);
};