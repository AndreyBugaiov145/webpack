const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode : 'development',
    entry : {
        main:'./main.js',
        analitics : './analitic.js'
    },
    output:{
        // filename:'[name].bundle.js',
        filename:'[name].[contenthash].js',
        path : path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ]
}