const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const parts = require('./libs/parts');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

const common = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Demo'
        })
    ]
};

var config;

switch(process.env.npm_lifecycle_event) {
    case 'build':
        config = merge(
            common,
            { 
                devtool: 'source-map',
                output: {
                    path: PATHS.build,
                    filename: '[name].[chunkhash].js',
                    chunkFilename: '[chunkhash].js'
                }
            },
            parts.setFreeVariable(
                'process.env.NODE_ENV',
                'production'
            ),
            parts.extractBundle({
                name: 'vendor',
                entries: ['react']
            }),
            parts.minify(), 
            parts.setupCSS(PATHS.app)    
        );
        break;
    default:
        config = merge(
            common,
            { devtool: 'eval-source-map' },
            parts.setupCSS(PATHS.app),
            parts.devServer({
                host: process.env.HOST,
                port: process.env.PORT
            })
        );
}

module.exports = validate(config);