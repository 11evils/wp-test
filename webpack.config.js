const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        './src/js/index.js'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/bundle.js'
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
                // include: path.resolve(__dirname, 'src/sass'),
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
                    limit: 100
                    // limit: 10 * 1024
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'img/[name].[ext]' },
                    },
                ],
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/style.bundle.css'
        }),
    ]
};