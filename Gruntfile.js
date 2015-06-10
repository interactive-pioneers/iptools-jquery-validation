'use strict';

module.exports = function(grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // load tasks on demand (speeds up dev)
  require('jit-grunt')(grunt, {
  });

  grunt.initConfig({
    yeoman: {
      src: 'src',
      dist: 'dist',
      pkg: grunt.file.readJSON('package.json'),
      meta: {
        banner: '/*! <%= yeoman.pkg.name %> - v<%= yeoman.pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '* <%= yeoman.pkg.homepage %>\n' +
          '* Copyright © <%= grunt.template.today("yyyy") %> ' +
          '<%= yeoman.pkg.author.name %>; Licensed <%= yeoman.pkg.licenses[0].type %> */\n'
      },
    },
    watch: {
      qa: {
        files: [
          '<%= yeoman.src %>/iptools-jquery-charcounter.js',
          'test/spec/test.js'
        ],
        tasks: ['concurrent:qa']
      },
      bdd: {
        files: [
          '<%= yeoman.src %>/iptools-jquery-charcounter.js',
          'test/spec/test.js'
        ],
        tasks: ['test']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.src %>/{,*/}*.js',
        'test/spec/{,*/}*.js'
      ]
    },
    mocha: {
      all: {
        options: {
          run: true
        },
        src: ['test/index.html']
      }
    },
    concurrent: {
      qa: {
        tasks: [
          'jshint',
          'mocha'
        ]
      },
      build: {
        tasks: [
          'uglify',
          'sass'
        ]
      }
    },
    uglify: {
      options: {
        banner: '<%= yeoman.meta.banner %>'
      },
      dist: {
        files: {
          'dist/iptools-jquery-charcounter.min.js': 'src/iptools-jquery-charcounter.js'
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*'
          ]
        }]
      }
    },
    sass: {
      dist: {
        files: {
          'dist/iptools-jquery-charcounter.css' : 'src/iptools-jquery-charcounter.scss'
        }
      }
    }
  });

  grunt.registerTask('test', ['mocha']);
  grunt.registerTask('qa', ['concurrent:qa']);

  grunt.registerTask('build', [
    'concurrent:qa',
    'clean:dist',
    'concurrent:build'
  ]);

  grunt.registerTask('default', ['build']);

  grunt.registerTask('travis', ['concurrent:qa']);
};
