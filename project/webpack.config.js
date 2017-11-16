
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {

    entry: "./src/app.jsx",

    output: {
        path: __dirname,
        filename: "./build/[name].bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    fix: true,
                    failOnError: false
                }
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [ "file-loader" ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [ "file-loader" ]
            }
        ]
    },
    plugins: [
                new HtmlWebpackPlugin({template: './src/index.html',  filename: './build/index.html'})        
            ],

    watch: NODE_ENV === 'development',

    devtool: (NODE_ENV === 'development') ?
        "source-map" : null,

    /*if (NODE_ENV === 'production') {
        plugins: [
            new UglifyJSPlugin({})
        ]
    }*/
}
