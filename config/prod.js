const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./base');

module.exports = merge(baseWebpackConfig, {
    entry: {
        main: "./src/index.jsx",
    },
    mode: "production",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js",
        publicPath: './',
    },
    // devtool: 'cheap-module-source-map', // source-map
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})