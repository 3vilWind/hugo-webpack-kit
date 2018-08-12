const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');


const INPUT_PATH = path.resolve(__dirname, 'src/assets');
const OUTPUT_PATH = path.resolve(__dirname, 'src/assets_compiled');
const PUBLIC_DIR = 'assets';

module.exports = {
    entry: [
        INPUT_PATH + '/js/main.js',
        INPUT_PATH + '/sass/styles.sass',
        INPUT_PATH + '/css/styles.css'
    ],
    output: {
        path: path.resolve(__dirname, OUTPUT_PATH, PUBLIC_DIR),
        publicPath: '/' + PUBLIC_DIR + '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    }
                },
            }
        ]
    },
    plugins: [
        new ManifestPlugin({
            fileName: '../../data/manifest.json'
        })
    ],
};
