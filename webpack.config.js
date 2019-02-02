const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },

    devtool: 'source-map',
    
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10 * 1024,
                    fallback: {
                        loader: 'file-loader',
                        options: { name: './img/[name].[ext]' }
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: './fonts/[name].[ext]' }
                    }
                ]
            },
            // {
            //     test: /\.(html)$/,
            //     use: [
            //         {
            //             loader: 'html-loader',
            //             options: {
            //                 attrs: [':data-src']
            //             }
            //         }   
            //     ]
            // },
            // {
            //     test: /\.(jpe?g|png|gif|ru)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: { name: './img/[name].[ext]' },
            //         },
            //     ],
            // },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: './style.bundle.css'
            // filename: './style.bundle.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([
            { from: './src/favicon', to: './favicon' },
            { from: './src/html-img', to: './html-img' },
            { from: './src/mail.php', to: './mail.php' },
            { from: './src/mailModal.php', to: './mailModal.php' },
            { from: './src/mailQuestion.php', to: './mailQuestion.php' },
            { from: './src/dogovor.doc', to: './dogovor.doc' }
        ]),
        new CleanWebpackPlugin([
            './dist/*'
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Inputmask: 'inputmask',
            'window.Inputmask': 'inputmask'
        })
    ]
};