const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./libs/parts');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
    style: [
        path.join(__dirname, 'app', 'main.css'),
        path.resolve(__dirname, 'node_modules/fixed-data-table/dist/fixed-data-table.min.css')
    ],
    test: path.join(__dirname, 'test')
};

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const common = merge(
    {
        entry: {
            app: PATHS.app
        },
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
    },
    parts.indexTemplate({
        title: 'Webpack Demos',
        template: './libs/index.html.ejs',
        appMountId: 'root'
    }),
    parts.loadJSX(PATHS.app)
);

var config;

switch(process.env.npm_lifecycle_event) {
    case 'build':
    case 'stats':
        config = merge(
            common,
            { 
                devtool: 'source-map',
                entry: { style: PATHS.style },
                output: {
                    path: PATHS.build,
                    filename: '[name].[chunkhash].js',
                    chunkFilename: '[chunkhash].js'
                }
            },
            parts.clean(PATHS.build),
            parts.setFreeVariable(
                'process.env.NODE_ENV',
                'production'
            ),
            parts.extractBundle({
                name: 'vendor',
                entries: ['react', 'react-dom']
            }),
            parts.minify(),
            parts.extractCSS(PATHS.style)
        );
        break;
    case 'test':
    case 'test:tdd':
        config = merge(
            common,
            { devtool: 'inline-source-map' },
            parts.loadJSX(PATHS.test)
        );
        break;
    default:
        config = merge(
            common,
            { 
                devtool: 'eval-source-map',
                entry: { style: PATHS.style }
            },
            parts.setupCSS(PATHS.style),
            parts.devServer({
                host: process.env.HOST,
                port: process.env.PORT
            })
        );
}

module.exports = validate(config);