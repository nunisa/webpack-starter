const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HTML_TEMPLATE = path.resolve('./index.html');
const FAVICON_PATH = path.resolve('./assets/images/favicon.png');
const NODE_MODULES_DIR = path.resolve('./node_modules');
const SRC_DIR = path.resolve('./src');
const DIST_DIR = path.resolve('./dist');

module.exports.DIRS = {
    DIST_DIR
};

module.exports.common = {
    context: SRC_DIR,
    entry: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        `${SRC_DIR}/index.js`
    ],
    output: {
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        path: DIST_DIR,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        modules: false,
                                        useBuiltIns: 'entry',
                                        corejs: {
                                            version: 3,
                                            proposals: true
                                        }
                                    }
                                ]
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.(le|sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true,
                            hmr: (process.env.NODE_ENV === 'development'),
                            reloadAll: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-preset-env')({ browsers: 'last 2 versions' })
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif|ico|woff2?|eot|[ot]tf)$/,
                use: ['file-loader']
            },
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: HTML_TEMPLATE,
            filename: 'index.html',
            favicon: FAVICON_PATH,
            title: 'Webpack 4 Starter'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash:8].css',
            chunkFilename: 'css/[name].[chunkhash:8].css'
        })
    ],
    devtool: (process.env.NODE_ENV === 'development') ? 'eval-source-map' : 'source-map',
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json'],
        modules: [SRC_DIR, NODE_MODULES_DIR]
    },
    performance: {
        hints: 'warning'
    },
    stats: {
        warnings: false
    },
    bail: true
};