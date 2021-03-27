'use strict';

const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {

    const OS = env || { BUILD: "web" }
    const htmlPath = (html) => path.resolve(__dirname, "../public/", html)

    return {
        module: {
            rules: [
                {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    include: /src/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(png|jpg|jpeg|gif|woff|woff2)$/,
                    use: "url-loader"
                },
                {
                    test: /(\.css|\.less)$/,
                    exclude: /node_modules/,
                    use: ExtractTextPlugin.extract({
                        fallback: {
                            loader: 'style-loader',
                            options: {
                                singleton: true
                            }
                        },
                        use: [
                            MiniCssExtractPlugin.loader,
                            "css-loader", "sciter-css-loader", "postcss-loader"
                        ]
                    })
                },
                {
                    test: /(\.css|\.less)$/,
                    exclude: /src/,
                    use: [
                        'style-loader', "css-loader",
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true
                                }
                            }
                        },
                        // MiniCssExtractPlugin.loader
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader', 'sciter-css-loader', 'sass-loader']
                },
                {
                    test: /\.(wav|mp3|eot|ttf|svg)$/,
                    loader: 'file-loader',
                },
            ]
        },
        resolve: {
            modules: [path.resolve(__dirname, '../src'), 'node_modules'],
            extensions: [".jsx", ".tsx", ".ts", ".js"],
            alias: {
                'react': "sciterjs-react",
                'react-dom': "sciterjs-react",
                'preact': "sciterjs-react/lib/preact",
            }
        },
        resolveLoader: {
            modules: [path.join(__dirname, '../loaders'), 'node_modules']
        },
        output: {
            path: path.resolve(__dirname, "../dist"),
            filename: "[name].js",
            publicPath: OS.BUILD === "app" ? '/' : '',
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                title: 'sciterjs-react',
                filename: "index.html",
                template: OS.BUILD === "app" ? htmlPath("index.sciter.html") : htmlPath("index.html"),
                favicon: "./public/favicon.ico",
                showErrors: true,
                inject: true,
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: false
                    // more options:
                    // https://github.com/kangax/html-minifier#options-quick-reference
                },
                chunks: ["main"]
            }),
            new MiniCssExtractPlugin({
                filename: '[name]-[contenthash].css'
            }),
        ]
    }
};