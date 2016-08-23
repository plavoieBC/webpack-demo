var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: [
            { pattern: 'test/*_test.js', watched:false },
            { pattern: 'test/**/*_test.js', watched:false }
        ],
        plugins: [
            'karma-chrome-launcher', 
            'karma-chai', 'karma-mocha',
            'karma-sourcemap-loader', 
            'karma-webpack', 'karma-coverage',
            'karma-mocha-reporter'
        ],
        preProcessors: {
            'test/*_test.js': ['webpack', 'sourcemap'],
            'test/**/*_test.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha', 'coverage'],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader' }
                ],
                preLoaders: [{
                    test: /\.jsx?$/,
                    include: path.resolve(__dirname, 'app', 'components'),
                    loader: 'istanbul-instrumenter'
                }]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },
        coverageReporter: {
            type: 'text'
        }
    });
};