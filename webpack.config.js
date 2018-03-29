var path = require('path');
var pkg = require('./package.json');

module.exports = {
    entry: {
        pigeonGL:'./src/PigeonGL.js',
        // 'lib/three':'./src/lib/three.js'
    },
    output: {
        path:path.resolve(__dirname,'build'),
        filename: '[name].js'
    },
    resolve: {
        // extensions: ['.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','stage-0']
                }
            }
        ]
    },
    // devtool: 'inline-source-map',
    plugins: [
        // uglifyJsPlugin
    ]
};