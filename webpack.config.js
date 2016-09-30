var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var cssExtractor = new ExtractTextWebpackPlugin('styles/[name].css');
var lifecycleEvent = process.env.npm_lifecycle_event;

/*
    INITIAL CONFIG
 */

var devConfig = {
    entry: './src/app.jsx',
    output: {
        publicPath: '/',
        path: __dirname + '/public',
        filename: 'js/app.js'
    },
    devtool: 'source-map',
    module: {
        // Pre Loaders run before the transpiler.  They're great for unit testing, code linting, etc.
		preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                exclude: /node_modules/
            }
        ],
        // Loaders are what manage all of your actual code and assets.
        loaders: [
            {    // CSS/Sass loader config
                test: /\.s?css$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            },
            {    // ES6 loader config
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel']
            },
            {   // Import fonts
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loaders: ['file?name=fonts/[name].[ext]']
            }
        ]
    },
    // Post CSS is a nifty plugin for normalizing your styles.  Often times, 3rd-party plugins like this one will require their own config block.
	postcss: [
		autoprefixer({ browsers: ['last 3 versions'] })	// Automatically adds vendor prefixes for x browser versions (and all vendors). :D
	],
    plugins: [
        // HtmlWebpackPlugin is what Automatically injects your styles and javascript into your index.html file.
        new HtmlWebpackPlugin({
            title: 'Webpack Build',
            template: './src/index.html'
        }),
        // We're letting webpack know that we're in a development environment
        new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		})
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './public',
        proxy: {
            // Proxy the url /api to an external API.  This way you don't have to install the server on your computer and can get coding faster.
            '/api': {
                target: process.env.API_HOST || 'localhost',
                xfwd: true,
                changeOrigin: true
            }
        }
    }
}

var buildConfig = {
    entry: './src/app.jsx',
    output: {
        publicPath: '/',
        path: __dirname + '/public',
        filename: 'js/app.js'
    },
    devtool: 'source-map',
    module: {
        // Pre Loaders run before the transpiler.  They're great for unit testing, code linting, etc.
		preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                exclude: /node_modules/
            }
        ],
        // Loaders are what manage all of your actual code and assets.
        loaders: [
            {    // CSS/Sass loader config
                test: /\.s?css$/,
                loader: cssExtractor.extract(['css', 'postcss', 'sass'])
            },
            {    // ES6 loader config
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel']
            },
            {   // Import fonts
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loaders: ['file?name=fonts/[name].[ext]']
            }
        ]
    },
    // Post CSS is a nifty plugin for normalizing your styles.  Often times, 3rd-party plugins like this one will require their own config block.
	postcss: [
		autoprefixer({ browsers: ['last 3 versions'] })	// Automatically adds vendor prefixes for x browser versions (and all vendors). :D
	],
    plugins: [
        // HtmlWebpackPlugin is what Automatically injects your styles and javascript into your index.html file.
        new HtmlWebpackPlugin({
            title: 'Webpack Build',
            template: './src/index.html'
        }),
        // We're letting webpack know that we're in a development environment
        new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
        new CleanWebpackPlugin(['public/fonts', 'public/js', 'public/styles', 'public/index.html']),
        cssExtractor,
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true,
            minimize: true
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './public',
        proxy: {
            // Proxy the url /api to an external API.  This way you don't have to install the server on your computer and can get coding faster.
            '/api': {
                target: process.env.API_HOST || 'localhost',
                xfwd: true,
                changeOrigin: true
            }
        }
    }
}

/*
    SELECT WHICH CONFIG TO USE
 */
switch (lifecycleEvent) {
    case 'build':
    module.exports = buildConfig;
    break;
    default:
    module.exports = devConfig;
    break;
}
