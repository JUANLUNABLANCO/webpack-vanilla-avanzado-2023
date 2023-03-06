const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */
const prodConfig = {
    mode: 'production',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devtool: "source-map", // para debugear en etapas de stagging no en produccion
    plugins: [new MiniCssExtractPlugin()],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
};

module.exports = merge(common, prodConfig);