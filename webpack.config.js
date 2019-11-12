var path = require('path');
var pkg = require('./package.json');

module.exports = {
	entry: {
		pigeonGL: './src/PigeonGL.js',
		// 'lib/three':'./src/lib/three.js'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js'
	},
	resolve: {
		// extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [["@babel/preset-env"], "@babel/preset-react"],
							plugins: [
								["@babel/plugin-proposal-decorators", { legacy: true }],
								["@babel/plugin-proposal-class-properties", { loose: true }],
								"@babel/plugin-transform-runtime",
								"@babel/plugin-syntax-dynamic-import"
							]
						}
					}
				]
			},
		]
	},
	// devtool: 'inline-source-map',
	plugins: [
		// uglifyJsPlugin
	]
};