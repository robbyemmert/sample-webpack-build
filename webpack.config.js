var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{	// CSS/Sass loader config
				test: /\.s?css$/,
				loaders: ['style', 'css', 'sass']
			},
			{	// Handlebars loader config (optional)
				test: /\.hbs$/,
				loaders: ['handlebars']
			},
			{	// ES6 loader config
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
