var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var cssExtractor = new ExtractTextWebpackPlugin('styles/[name].css');
var lifecycleEvent = process.env.npm_lifecycle_event;

var config = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'js/app.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {    // CSS/Sass loader config
				key: 'STYLES',
                test: /\.s?css$/,
                loaders: ['css', 'sass']
            },
            {    // ES6 loader config
				key: 'JS',
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel']
            },
            {
				key: 'FONTS',
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loaders: ['file?name=fonts/[name].[ext]']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({        // Plugin to inject source references into index.html (note: doesn't need handlebars)
            title: 'Webpack Build',
            template: './src/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './public',
        proxy: [
            {
                path: new RegExp('/api/(.*)'),
                changeOrigin: true,
                prependPath: false,
                xfwd: true,
                target: 'https://yourApiDomain.net/'
            }
        ]
    }
}

switch (lifecycleEvent) {
	case 'build':
		// build specific mutations

		config.module.loaders.forEach(item => {
			switch (item.key) {
				case 'STYLES':
					item.loader = cssExtractor.extract(item.loaders);
					delete item.loaders;
					break;
			}
		})

		config.plugins.push(cssExtractor);

		config.plugins.push(new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}));

		config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true,
            minimize: true
        }));

		config.plugins.push(new CleanWebpackPlugin(['public/fonts', 'public/js', 'public/styles', 'public/index.html']));

		break;
	default:
		// in all other cases
		config.module.loaders.forEach(item => {
			switch (item.key) {
				case 'STYLES':
					item.loaders.unshift('style');
					break;
			}
		})

		config.plugins.push(new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		}));
		break;
}

module.exports = config;
