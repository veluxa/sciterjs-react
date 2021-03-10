'use strict';

const fs = require('fs');
const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const appSrc = resolveApp('src')
const platform = process.env.PLATFORM

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                include: [
                    appSrc
                ],
                // exclude: /node_modules/,
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
                    fallback: {// 这里表示不提取的时候，使用什么样的配置来处理css
                        loader: 'style-loader',
                        options: {
                            singleton: true // 表示将页面上的所有css都放到一个style标签内
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
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: [".jsx", ".tsx", ".ts", ".js"],
        alias: {
            'react': "sciterjs-react",
            'react-dom': "sciterjs-react"
        }
    },
    resolveLoader: {
        modules: [path.join(__dirname, './loaders'), 'node_modules']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'ide',
            filename: "index.html",
            template: platform ? "./public/index.sciter.html" : "./public/index.html",
            showErrors: true,
            inject: true,
            minify: {
                removeComments: false,
                collapseWhitespace: false,
                removeAttributeQuotes: false
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            chunks: ["main", "common", 'index']
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css'
        }),
    ]
};