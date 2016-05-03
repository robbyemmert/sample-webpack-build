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
			}
		]
	}
}
