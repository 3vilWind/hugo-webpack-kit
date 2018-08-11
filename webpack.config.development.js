const merge = require('webpack-merge');
const CleanPlugin = require('clean-webpack-plugin');
const ShellPlugin = require('webpack-shell-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.config.common');

const HUGO_ADDITIONAL_ARGUMENTS = '-D';

module.exports = merge(common, {
    output: {
        filename: 'js/bundle.js',
    },
    mode: 'development',
    plugins: [
        new CleanPlugin([
            'src/assets_compiled',
            'src/data/manifest.json'
        ]),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        }),
        new ShellPlugin({
            onBuildEnd: ['hugo server -s src ' + HUGO_ADDITIONAL_ARGUMENTS]
        })
    ]
});
