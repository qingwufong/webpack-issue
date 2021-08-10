const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].js',
        publicPath: './',
        chunkFilename: 'static/js/[name].js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-issue',
            template: path.resolve(__dirname, 'static/index.html'),
            minify: false,
        }),
    ],
};