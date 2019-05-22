const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./common.config');

const { DIRS, common } = commonConfig;
const { DIST_DIR } = DIRS;
const PORT = 9090;

module.exports = merge.smart(common, {
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: DIST_DIR,
        clientLogLevel: 'none',
        compress: true,
        historyApiFallback: true,
        hot: true,
        index: 'index.html',
        inline: true,
        open: true,
        host: '0.0.0.0',
        public: `localhost:${PORT}`,
        port: PORT
    }
});
