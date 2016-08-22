const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');

exports.devServer = function(options) {
    return {
        devServer: {
            // HTML5 History API Routing Support
            historyApiFallback: true,
            hot: true,
            inline: true,
            stats: 'errors-only',
            host: options.host || '0.0.0.0',
            port: options.port
        },
        plugins: [
            // Multi-pass compliation for larger projects
            new webpack.HotModuleReplacementPlugin({
                multistep: true
            })
        ]
    };
}

exports.minify = function() {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    };
}

exports.setFreeVariable = function(key, value) {
    const env = {};
    env[key] = JSON.stringify(value);

    return {
        plugins: [
            new webpack.DefinePlugin(env)
        ]
    };
}

exports.extractBundle = function(options) {
    const entry = {};
    entry[options.name] = options.entries;

    return {
        entry: entry,
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: [options.name, 'manifest']
            })
        ]
    };
}

exports.clean = function(path) {
    return {
        plugins: [
            new CleanWebpackPlugin([path], {
                root: process.cwd()
            })
        ]
    };
}

exports.setupCSS = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style', 'css'],
                    include: paths
                }
            ]
        }
    };
}

exports.setupSASS = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loaders: ['style', 'css', 'sass'],
                    include: paths
                }
            ]
        }
    };
}

exports.extractCSS = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style', 'css'),
                    include: paths
                }    
            ]
        },
        plugins: [
            new ExtractTextPlugin('[name].[chunkhash].css')
        ]
    };
}

exports.purifyCSS = function(paths) {
    return {
        plugins: [
            new PurifyCSSPlugin({
                basePath: process.cwd(),
                paths: paths
            })
        ]
    }
}



exports.setupFonts = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.woff$/,
                    loader: 'url',
                    query: {
                        name: 'font/[hash].[ext]',
                        limit: 5000,
                        mimetype: 'application/font-woff'
                    },
                    include: paths
                },
                {
                    test: /\.ttf$|\.eot$/,
                    loader: 'file',
                    query: {
                        name: 'font/[hash].[ext]'
                    },
                    include: paths
                }
            ]
        }
        
    }
}