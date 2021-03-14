const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(`${__dirname}/dist`),
        filename: 'bundle.js'
    },
    module: {
        rule: [
            {
                test: /\.css$/,
                exclude: '/node_modules',
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                loader: 'file-loader',
                option: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist/'),
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true
        })
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css']
    }
}