'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: PATHS.app,
    // Given webpack-dev-server runs in-memory, we can drop
    // `output`. We'll look into it again once we get to the
    // build chapter.
    /*output: {
     path: PATHS.build,
     filename: 'bundle.js'
     },*/
    // Add resolve.extensions. '' is needed to allow imports an extension
    // Note the .'s before extensions!!! Without those matching will fail
    resolve: {
        extensions: ['', '.js', '.jsx'] // evaluated from left to right
    },
    module: {
        loaders: [
            {
                test: /\.css$/, // RegEx to match resources
                loaders: ['style', 'css'] // loaders to apply from right to left
            },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.(png|jpg)$/, loader: "url?limit=8192"},
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {test: /\.(otf|eot|woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: PATHS.app
            },
            {test: /\.less$/, loader: 'style!css!less'},
            {test: /\.scss$/, loader: 'style!css!sass'},


        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack react template',
            favicon: './favicon.ico'
        })
    ]
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            // Display only errors to reduce the amount of output.
            stats: 'errors-only',

            // Parse host and port from env so this is easy to customize.
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}