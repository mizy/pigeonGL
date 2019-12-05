var path = require('path');
var pkg = require('./package.json');
const webpack = require("webpack")
module.exports = {
	entry: {
		pigeonGL: './src/PigeonGL.js',
		// 'lib/three':'./src/lib/three.js'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		library: "PigeonGL",
		libraryTarget: "umd",
		libraryExport: "default" // 默认导出
	},
	optimization: {
		minimizer: []
	},
	externals: {
		"three": "three"
	},
	devServer: {
		port: 8881,
		index: "dev.html",
		open: true,
		host: "0.0.0.0",
		openPage: "./dev.html",
		hot: true,
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
							presets: ["@babel/preset-env"],
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
		new webpack.ProvidePlugin({
			THREE: "three"
		}),
	]
};