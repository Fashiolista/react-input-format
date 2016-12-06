const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './react-input-format.js',
    ],

    output: {
        filename: 'react-input-format.js',
        path: './dist',
        publicPath: '/',
    },

    context: resolve(__dirname, 'src'),

    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'src'),
        publicPath: '/',
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
        ],
    },

    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
            React: "react",
        }),
    ],
};