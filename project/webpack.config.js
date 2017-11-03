'use strict'

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {

    entry: "./src/app.js",

    output: {
        path: __dirname,
        filename: "./build/app.bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                        },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                    /*,
                                        {
                                            loader: "less-loader"
                                        }*/
                ]
            }
        ]
    },

    watch: NODE_ENV === 'development',

    devtool: (NODE_ENV === 'development') ?
        "source-map" : null,

    /*if (NODE_ENV === 'production') {
        plugins: [
            new UglifyJSPlugin({})
        ]
    }*/
}