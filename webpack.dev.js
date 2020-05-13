const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require("webpack")

module.exports = {
    entry: "./src/client/index.js",
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path:path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: "/\.js$/",
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: 
                    {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    
                ]
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif|ico)$/,
                use: {
                    loader: 'file-loader',
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
    ],
    
};