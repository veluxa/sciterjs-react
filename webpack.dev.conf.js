
const baseWebpackConfig = require('./webpack.base.conf');
const { merge } = require('webpack-merge');
const path = require("path");

const serverPort = 9000;

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    entry: [
        `webpack-dev-server/client?http://localhost:${serverPort}`,
        "./src/index.jsx"
    ],
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: serverPort,
        publicPath: "/",
        open: true,
        hot: true
    },
})