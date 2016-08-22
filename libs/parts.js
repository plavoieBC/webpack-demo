const webpack = require('webpack');

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