var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, 'demo/main.js'),
    output: {
        path: path.resolve(__dirname, 'demo/dist'),
        filename: 'main.js',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new OpenBrowserPlugin({url: 'http://localhost:8080/'})
    ]
};
