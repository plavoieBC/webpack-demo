module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        reporters: ['mocha'],
        mochaReporter: {
            output: 'noFailures'
        },
        files: [
            'test/**/*.spec.*'
        ],
        preprocessors: {
            'app/**/*.js': ['webpack', 'sourcemap'],
            'test/**/*.js': ['webpack', 'sourcemap']
        },
        webpack: require('./webpack.config'),
        webpackServer: {
            noInfo: true
        },
        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-mocha-reporter'
        ],
        babelPreprocessor: {
            options: {
                presets: ['airbnb']
            }
        },
        port: 8081,
        colors: true,
        autoWatch: true,
        singleRun: false
    });
};