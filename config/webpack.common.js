const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash].js',
        publicPath: '', // static: { directory: path.join(__dirname, 'dist') }. // en otras versiones de webpack
        // chunkFilename: "[name].[contenthash].chunk.js", // en otars versiones de webpack
    },
    resolve: { // [".js", ".jsx", ".json"]
        extensions: [".js", ".json"]
    },
    module: {
        rules: [{ // VANILLAJS para entender .js .mjs, .jsx (React) según necesitemos
                test: /\.(m?js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            { // IMAGES para copiarlas directamente, las pequeñas de menos de 8kb las enbebe como base64 en el html
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i
            },
            {
                // HTML LOADER entenderá src y carga las imagenes en ./dist o ./build
                test: /\.html$/,
                loader: 'html-loader'
            },
            { // STYLES para entender y cargar los estilos dentro del js
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader', // embebe los estilos en el html 
                    'css-loader',
                    'sass-loader'
                ]
            }

        ]
    },
    plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                filename: 'index.html'
            })
        ]
        // devtool: 'cheap-module-eval-source-map',
}