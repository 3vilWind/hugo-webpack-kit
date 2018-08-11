const merge = require('webpack-merge');
const CleanPlugin = require('clean-webpack-plugin');
const ShellPlugin = require('webpack-shell-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.config.common');

const HUGO_ADDITIONAL_ARGUMENTS = '';

module.exports = merge(common, {
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    output: {
        filename: 'js/bundle.[hash].js',
    },
    mode: 'production',
    plugins: [
        new CleanPlugin([
            'src/assets_compiled',
            'src/data/manifest.json',
            'build'
        ]),
        new MiniCssExtractPlugin({
            filename: 'css/styles.[hash].css'
        }),
        new ShellPlugin({
            onBuildEnd: ['hugo -s src -d ../build ' + HUGO_ADDITIONAL_ARGUMENTS]
        })
    ]
});
