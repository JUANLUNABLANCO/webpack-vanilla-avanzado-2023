const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: 'development',
    devServer: {
        compress: false,
        port: 3000,
        open: true // en webpack 5.5 open: <name-browser>
    },
    target: "web", // ignorará compilaciones de navegadores antiguos, lo que hay en browserslist
    devtool: "eval-source-map",
}


module.exports = merge(common, devConfig);