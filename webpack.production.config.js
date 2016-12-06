const { resolve } = require('path');
const webpack = require('webpack');
const COMPONENT_NAME = process.env.npm_package_config_component;

module.exports = {
    entry: [
        './react-input-format.js',
    ],

    output: {
        filename: 'react-input-format.js',
        path: './dist',
        publicPath: '/',
    },

    context: resolve(__dirname, 'src'),

    devtool: "source-map",

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
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
    ],

    library: COMPONENT_NAME,
    libraryTarget: 'umd',

    externals: {
        react: {root: 'React', commonjs2: 'react', commonjs: 'react', amd: 'react'}
    }
};