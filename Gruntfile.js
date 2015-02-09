module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            example: {
                port: 1337,
                base: '.'
            }
        }
    });

  //   require('jit-grunt')(grunt);

  // grunt.initConfig({
  //   less: {
  //     development: {
  //       options: {
  //         compress: true,
  //         yuicompress: true,
  //         optimization: 2
  //       },
  //       files: {
  //         "css/main.css": "less/main.less" // destination file and source file
  //       }
  //     }
  //   },
  //   watch: {
  //     styles: {
  //       files: ['less/**/*.less'], // which files to watch
  //       tasks: ['less'],
  //       options: {
  //         nospawn: true
  //       }
  //     }
  //   }
  // });
    //grunt.registerTask('default', ['less', 'watch']);
  //     "grunt": "~0.4.5",
  // "grunt-contrib-less": "~0.11.0",
  // "grunt-contrib-watch": "~0.6.1",
  // "jit-grunt": "~0.7.0"

    grunt.loadNpmTasks('grunt-connect');
    grunt.registerTask('default', 'connect:example');

};