const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development' ? 'http://praktikum.tk/cohort12' : 'https://praktikum.tk/cohort12';

module.exports = {
    entry: {
        index: './src/js/index.js',
        about: './src/js/about.js',
        analitics: './src/js/analitics.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [
                                (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                                'css-loader', 
                                'postcss-loader'
                        ]
        },

            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]',
               
            },

            {
                test: /\.(png|jpg|gif|ico|svg|webp)$/,
                use: [
                    'file-loader?name=./images/[name].[ext]&esModule=false',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 80
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            }
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        
        new HtmlWebpackPlugin({
            chunks: ['index'],
            template: 'src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['about'],
            template: 'src/about.html',
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['analitics'],
            template: 'src/analitics.html',
            filename: 'analitics.html'
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].[contenthash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorPluginOptions: {
              preset: ["default"],
            },
            canPrint: true,
          }),

        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};