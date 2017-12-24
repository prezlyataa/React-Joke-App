const path = require('path');

const APP_DIR = path.resolve(__dirname, 'app');
const PUBLIC_PATH = '/build';
const BUILD_DIR = path.resolve(__dirname, 'build');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: `${APP_DIR}/app.component.js`,
    output: {
        path: BUILD_DIR,
        publicPath: PUBLIC_PATH,
        filename: '[name].js'
    },
    resolve: {
        alias: {
            app: path.join(__dirname, 'app')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'css-loader', options: {minimize: true}},
                        'sass-loader'
                    ]
                })

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `${path || ''}[name].[ext]`

                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ],
    devtool: 'source-map'
};

module.exports = config;
