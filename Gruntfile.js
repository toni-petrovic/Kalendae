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
                    ,"build/nutrition-info.css": "less/nutrition-info.less" // destination file and source file
                    ,"build/index-list.css": "less/index-list.less" // destination file and source file
                    ,"build/index-calendar.css": "less/index-calendar.less" // destination file and source file
                    ,"build/nutrition-accordion.css": "less/nutrition-accordion.less" // destination file and source file
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
