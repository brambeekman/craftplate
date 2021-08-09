const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const Connect = require('gulp-connect-php');
const Dotenv = require('dotenv-webpack');

const configureDevServer = function () {
    Connect.server({
        base: './web',
        port: 1422,
        keepalive: true
    });

    return new BrowserSyncPlugin({
        proxy: 'localhost:1422',
        port: 1422,
        notify: false,
        files: ['./templates/**/*.twig']
    });
};


module.exports = {
    mode: 'production',
    entry: './src/js/app.js',
    output: {
        path: path.join(__dirname, 'web/dist'),
        filename: '[name].js',
    },
    plugins: [
        new configureDevServer(),
        new Dotenv()
    ],
    module: {
        rules: [
            {
                test: /\.js$/i,
                include: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                include: path.join(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'web/dist'),
        watchContentBase: true,
    },
};