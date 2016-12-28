module.exports = function(grunt) {

    grunt.initConfig({ 
        jshint: {
            all: ['js/*.js', 'Gruntfile.js']
        },
        less: {
            development: {
                options: {
                    paths: ["less/"]
                },
                files: {"css/styles.css": "less/**.less"}
            }
        },
        watch: {
            scripts: {
                files: ['js/*.js', 'Gruntfile.js', 'less/*.less'],
                tasks: ['jshint', 'less'],
                options: {
                    spawn: false,
                },
            },
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/*.js'],
                dest: 'dist/built.js',
            },
        },        
    });
    
    //load npm tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //register tasks
    grunt.registerTask('default', ['less']);
};