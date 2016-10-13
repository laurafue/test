module.exports = function(grunt) {
    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // Configure Grunt
    grunt.initConfig({
        //Server
        watch: {
            all: {
                files: ['app/**/*.*', '!app/bower_components/**', '!app/node_modules/**'],
                options: {
                    livereload: true,
                    spawn: false
                },
                //Parts of build
                tasks: ["dev-watch"]
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    base: {
                        path: "dist/app"
                    }
                },
                middleware: function(connect, options, middlewares) {
                    middlewares.unshift(function(req, res, next) {
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Access-Control-Allow-Methods', '*');
                        //a console.log('foo') here is helpful to see if it runs
                        return next();
                    });
                    return middlewares;
                }
            }
        },
        //Build
        bower_concat: {
            all: {
                dest: 'dist/app/vendor/vendor.js',
                mainFiles: {
                    'html5-boilerplate': ['bower_components/html5-boilerplate/js/main.js', 'bower_components/html5-boilerplate/css/main.css'],
                    'angular-ui': ['bower_components/angular-ui/build/angular-ui.js', 'bower_components/angular-ui/build/angular-ui.css']
                },
                dependencies: {
                    'angular': 'jquery',
                    "materialize": 'jquery',
                },
                bowerOptions: {
                    relative: false
                }
            }
        },
        concat: {
            js_build: {
                dest: 'dist/app/app.js',
                src: ["app/config.js", "app/modules/**/*.js", 'app/app.js']

            },
            js_dev: {
                dest: 'dist/app/app.js',
                src: ["app/config_dev.js", "app/modules/**/*.js", 'app/app.js']
            },
            css: {
                dest: 'dist/app/vendor/vendor.css',
                src: [
                    "bower_components/html5-boilerplate/css/normalize.css",
                    "bower_components/html5-boilerplate/css/main.css",
                    "bower_components/materialize/extras/noUiSlider/nouislider.css",
                    "bower_components/materialize/dist/css/materialize.css",
                ]

            },
        },
        concat_sourcemap: {
            options: {
                sourcesContent: false
            },
            target: {
                files: {
                    'dist/app/app.js': ["app/config_dev.js", 'app/modules/**/*.js', "app/app.js"]
                }
            }
        },
        copy: {
            build: {
                src: ['app/app.css', 'app/images/**', "app/modules/**/*.html", "app/myfavicon.ico"],
                dest: 'dist/',
            },
            fonts: {
                cwd: 'bower_components/materialize/', // set working folder / root to copy
                src: 'font/**', // copy all files and subfolders
                dest: 'dist/app', // destination folder
                expand: true // required when using cwd
            },
            github: {
                cwd: 'dist/app/',
                src: '**', // copy all files and subfolders
                dest: '../fuechtenkordt.com/', // destination folder
                expand: true // required when using cwd
            },
        },
        processhtml: {
            dist: {
                files: {
                    'dist/app/index.html': ['app/index.html']
                }
            }
        },
        uglify: {
            js: {
                options: {
                    mangle: true,
                },
                files: {
                    'dist/app/app.js': ['dist/app/app.js'],
                }
            },
            vendor: {
                options: {
                    mangle: true,
                },
                files: {
                    'dist/app/vendor/vendor.js': ['dist/app/vendor/vendor.js'],
                }
            }

        },
        ngAnnotate: {
            options: {
                singleQuotes: true,
                sourceMap: true,
            },
            your_target: {
                files: {
                    'dist/app/app.js': ['dist/app/app.js'],
                }
            },
        },
        cssmin: {
            app: {
                files: {
                    'dist/app/app.css': ['dist/app/app.css']
                }

            },
            vendor: {
                files: {
                    'dist/app/vendor/vendor.css': ['dist/app/vendor/vendor.css']
                }
            },
        },
        htmlclean: {
            deploy: {
                expand: true,
                cwd: 'dist/app/modules',
                src: '**/*.html',
                dest: 'dist/app/modules/'
            }
        },
        sass: { // Task
            dist: { // Target               
                files: { // Dictionary of files
                    'app/css/vendor/materialize.css': 'app/css/vendor/materialize.scss', // 'destination': 'source'

                }
            }
        },
        // grunt-open will open your browser at the project's URL
        // https://www.npmjs.org/package/grunt-open

    });
    grunt.registerTask("dev-watch", [
        "sass",
        "newer:concat:js_dev",
        "newer:concat:css",
        "newer:copy:build",
        "newer:copy:fonts",
        "newer:processhtml",
        "concat_sourcemap",
        "copy:github",
    ]);
    grunt.registerTask("dev", [
        "sass",
        "bower_concat",
        "concat:js_dev",
        "concat:css",
        "copy:build",
        "copy:fonts",
        "processhtml",
        "concat_sourcemap",
        "copy:github",
    ]);
    grunt.registerTask("build", [
        "bower_concat",
        "concat:css",
        "concat:js_build",
        "copy:build",
        "copy:fonts",
        "processhtml",
        "uglify:vendor",
        "ngAnnotate",
        "uglify:js",
        "cssmin:vendor",
        "cssmin:app",
        "htmlclean",
        "copy:github",
    ]);
    // Creates the `server` task
    grunt.registerTask('default', [
        "dev",
        "connect",
        'watch'
    ]);
};
