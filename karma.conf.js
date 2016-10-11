module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: [{ pattern: 'spec.bundle.js', watched: false }],
        exclude: [],
        plugins: [
            require("karma-chai"),
            require("karma-chrome-launcher"),
            require("karma-mocha"),
            require("karma-mocha-reporter"),
            require("karma-sourcemap-loader"),
            require("karma-webpack")
        ],
        preprocessors: { 'spec.bundle.js': ['webpack', 'sourcemap'] },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.js/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
                    { test: /\.html/, loader: 'raw' },
                    { test: /\.styl$/, loader: 'style!css!stylus' },
                    { test: /\.css$/, loader: 'style!css' }
                ]
            }
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true
    });
};