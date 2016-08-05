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

var config = {
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
				key: 'STYLES',
                test: /\.s?css$/,
                loaders: ['css', 'postcss', 'sass']
            },
            {    // ES6 loader config
				key: 'JS',
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel']
            },
            {   // Import fonts
				key: 'FONTS',
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

/*
    OVERRIDE THE INITIAL CONFIG BASED ON OUR ENVIRONMENT
 */
switch (lifecycleEvent) {
    /*
        PRODUCTION CONFIGURATION
     */
	case 'build':
		// build specific mutations

        // Modify the loaders as necessary
		config.module.loaders.forEach(item => {
			switch (item.key) {
				case 'STYLES':
                    // Replace any style loaders with the CSS extractor.  This will make your page load styles the normal way instead of with JavaScript.
					item.loader = cssExtractor.extract(item.loaders);
					delete item.loaders;
					break;
			}
		})

        // Add the CSS Extractor.
		config.plugins.push(cssExtractor);

        // Tell Webpack that we are indeed running the production build. Some plugins and libraries acknowledge the NODE_ENV production environment variable, and will act differently.  ReactJS, for example, won't throw dev errors if it's compiled with this variable set to 'production'.  Webpack also optimizes your code for production, and leaves out a lot of it's debugging features.
		config.plugins.push(new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}));

        // Uglify (minify) all JavaScript
		config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true,
            minimize: true
        }));

        // Clean any existing assets from the build path before generating new ones.  This prevents junk from hanging around after you stop using it.
		config.plugins.push(new CleanWebpackPlugin(['public/fonts', 'public/js', 'public/styles', 'public/index.html']));

		break;
	default:
		/*
    		DEVELOPMENT CONFIGURATION
		 */
		// Same as in the production configuration, we're mutating the loaders to suit our development environment.
		config.module.loaders.forEach(item => {
			switch (item.key) {
				case 'STYLES':
					item.loaders.unshift('style');
					break;
			}
		})

        // We are letting Webpack know that we are running the development build.
		config.plugins.push(new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		}));
		break;
}

module.exports = config;
