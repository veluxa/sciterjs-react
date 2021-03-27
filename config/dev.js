const { merge } = require('webpack-merge');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const baseWebpackConfig = require('./base');
const path = require("path");

const serverPort = 9000;

module.exports = merge(baseWebpackConfig(), {
    mode: 'development',
    entry: {
        main: [
            `webpack-dev-server/client?http://localhost:${serverPort}`,
            "/src/index.jsx"
        ],
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: serverPort,
        publicPath: "/",
        open: true,
        hot: true
    },
    plugins: [
        new FaviconsWebpackPlugin({
            logo: "./public/favicon.ico"
        })
    ]
})