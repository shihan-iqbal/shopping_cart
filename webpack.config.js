var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/app/app.module.js', // ./ is important here
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.styl$/, loader: 'style!css!stylus' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        })
        // ,
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: 'vendor',
        //   minChunks: function (module, count) {
        //     return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1;
        //   }
        // })
    ]
};