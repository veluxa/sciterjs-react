const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./base');

module.exports = merge(baseWebpackConfig, {
    entry: "./src/index.jsx",
    mode: "production",
    // devtool: 'cheap-module-source-map', // source-map
    output: {
        path: path.resolve(__dirname, "../aardio/layout"),
        filename: "bundle.js",
        publicPath: '',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})