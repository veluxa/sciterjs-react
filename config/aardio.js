const { merge } = require('webpack-merge');
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./base');

module.exports = env => merge(baseWebpackConfig(env), {
    entry: "./src/index.jsx",
    mode: "production",
    // devtool: 'cheap-module-source-map', // source-map
    output: {
        path: path.resolve(__dirname, "../aardio/layout"),
        filename: "bundle.js",
        publicPath: '',
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
})