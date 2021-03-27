const path = require("path");
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./base');
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = env => merge(baseWebpackConfig({ ...env, MODE: "prod" }), {
    entry: {
        main: "./src/index.jsx",
    },
    mode: "production",
    optimization: {
        minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            }
        },
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js",
        publicPath: './',
    },
    // devtool: 'cheap-module-source-map', // source-map
    plugins: [
        new CleanWebpackPlugin(),
    ]
})