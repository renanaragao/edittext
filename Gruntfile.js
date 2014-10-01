/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    phk: grunt.file.readJSON('package.json'),
    concat: {
      css: {
        src: ['app/css/edittext.css',
              'app/css/icons.css'],
        dest: 'builds/css/edittext.css'
      },
      js: {
        src: ['app/plugin/flexiColorPicker/colorpicker.js',
          'app/script/app.js',
          'app/script/factory/*.js',
          'app/script/comandos/*.js',
          'app/script/editor.js',
          'app/script/edittext.js',
          'app/script/start.js'
        ],
        dest: 'builds/js/app.js'
      }
    },
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    cssmin: {
      css: {
        src: 'builds/css/edittext.css',
        dest: 'builds/css/edittext.min.css'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'builds/js/edittext.min.js': ['builds/js/app.js']
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);

};