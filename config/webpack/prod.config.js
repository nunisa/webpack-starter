const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfig = require('./common.config');

const { common } = commonConfig;

module.exports = merge.smart(common, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin(),
            new UglifyJSPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    }
});