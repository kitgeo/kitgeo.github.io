import path from 'path';
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

import packageJson from './package.json';

const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const extractLess = new ExtractTextPlugin({
    filename: 'css/[name].css',
    disable: false,
    allChunks: true
});

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './js/index.js',
        products: './js/products.js'
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader',
            include: [
                path.resolve(__dirname, 'src')
            ]
        }, {
            test: /\.less$/,
            use: extractLess.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }],
                // use style-loader in development
                fallback: "style-loader",
                publicPath: '../'
            }),
            include: [
                path.resolve(__dirname, 'src')
            ]
        }, {
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'css-img/[name].[hash:6].[ext]'
                }
            },
            include: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules/lightbox2/src')
            ]
        }, {
            test: /\.(eot|otf|svg|ttf|woff2?)/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[1].[hash:6].[ext]',
                    regExp: 'src/(.+)\\.[^.]+'
                }
            },
            include: [
                path.resolve(__dirname, 'src')
            ]
        }, {
            test: /\.(eot|otf|svg|ttf|woff2?)/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[1].[hash:6].[ext]',
                    regExp: 'node_modules/bootstrap/(.+)\\.[^.]+'
                }
            },
            include: [
                path.resolve(__dirname, 'node_modules/bootstrap')
            ]
        }]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
        alias: {
            'jquery.stellar': 'jquery.stellar/jquery.stellar'
        }
    },
    resolveLoader: {
        modules: ['node_modules'],
        moduleExtensions: ['.js']
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            NODE_ENV: JSON.stringify(NODE_ENV),
            VERSION: JSON.stringify(packageJson.version)
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        extractLess,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        })
    ],
    devtool: NODE_ENV === 'development' ? 'source-map' : false
};

if (NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compress: {
            warnings: false,
            drop_console: false,
            unsafe: false
        },
        sourceMap: false
    }));
}

export default config;
