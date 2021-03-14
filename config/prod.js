const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./base');

module.exports = merge(baseWebpackConfig, {
    entry: {
        utils: ["./src/utils/EventSource.js"],
        main: "./src/index.jsx",
    },
    mode: "production",
    // devtool: 'cheap-module-source-map', // source-map
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})