var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{	// CSS/Sass loader config
				test: /\.s?css$/,
				loaders: ['style', 'css', 'sass']
			},
			{	// ES6 loader config
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['babel']
			},
			{
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loaders: ['file?name=fonts/[name].[ext]']
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({		// Plugin to inject source references into index.html (note: doesn't need handlebars)
			title: 'Webpack Build',
			template: './src/index.html'
		})
	]
}
