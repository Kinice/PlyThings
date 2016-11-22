var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { 
        index: './src/js/page/index.js',
        about: './src/js/page/about.js',
    },
    output: { 
        path: path.join(__dirname, 'dist'), 
        publicPath: '/dist/',              
        filename: 'js/[name].js',           
        chunkFilename: 'js/[id].chunk.js'  
    },
    module: {
        loaders: [ 
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader') 
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css!less')
            }, {
                test: /\.html$/,
                loader: "html?attrs=img:src img:data-src"
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ 
            $: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', 
            chunks: ['index','about'], 
            minChunks: 2
        }),
        new ExtractTextPlugin('css/[name].css'), 

        new HtmlWebpackPlugin({ 
            favicon: './src/img/favicon.ico', 
            filename: './view/index.html', 
            template: './src/view/index.html', 
            inject: 'body', 
            hash: true, 
            chunks: ['vendors', 'index'],
            minify: {   
                removeComments: true, 
                collapseWhitespace: false 
            }
        }),
        new HtmlWebpackPlugin({ 
            favicon: './src/img/favicon.ico', 
            filename: './view/about.html', 
            template: './src/view/about.html', 
            inject: true, 
            hash: true,
            chunks: ['vendors', 'about'],
            minify: { 
                removeComments: true, 
                collapseWhitespace: false 
            }
        }),

        new webpack.HotModuleReplacementPlugin()
    ],
   
    devServer: {
        contentBase: './',
        host: 'localhost',
        port: 9090, 
        inline: true, 
        hot: true, 
    }
};