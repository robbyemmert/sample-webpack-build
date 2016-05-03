var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.s?css$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.hbs$/,
				loaders: ['handlebars']
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['babel']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack Build',
			template: './src/index.hbs'
		})
	]
}
