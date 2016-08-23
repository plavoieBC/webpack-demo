var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        reporters: ['mocha'],
        files: [
            'test/**/*_test.*'
        ],
        plugins: [
            'karma-chrome-launcher', 
            'karma-chai', 'karma-mocha',
            'karma-sourcemap-loader', 
            'karma-webpack',
            'karma-mocha-reporter'
        ],
        preprocessors: {
            'test/**/*_test.*': ['webpack', 'sourcemap']
        },
        webpack: require('./webpack.config'),
        webpackMiddleware: {
            noInfo: true
        }
    });
};