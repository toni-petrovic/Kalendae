module.exports = function(grunt) {

    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "build/kalendae.css": "less/kalendae.less" // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['less/*.less'], // which files to watch
                tasks: ['less']            
            }
        },
        connect: {
            server: {
                options: {
                    livereload: true,
                    base: '.',
                    port: 1337,
                    hostname: '0.0.0.0'
                }                
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', function(){

        grunt.task.run([
            'less',
            'connect:server',
            'watch'
        ]);

    });

};
