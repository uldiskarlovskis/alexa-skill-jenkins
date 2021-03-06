// Generated on 2015-09-08 using generator-angular 0.9.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Replace this with your Lambda ARN
    var lambdaArn = 'arn:aws:lambda:eu-west-1:805833124171:function:FunctionH01';

    // Define the configuration for all the tasks
    grunt.initConfig({
        lambda_invoke: {
            default: {
                options: {
                    region: 'eu-west-1',
                    profile: 'default' // replace with your own profile name
                }
            }
        },
        lambda_package: {
            default: {}
        },
        lambda_deploy: {
            default: {
                options: {
                    timeout: 6,
                    memory: 128,
                    profile: 'default'
                },
                arn: lambdaArn
            }
        }
    });

    grunt.registerTask('invoke', [
        'lambda_invoke'
    ]);

    grunt.registerTask('deploy', [
        'lambda_package',
        'lambda_deploy'
    ]);
};
