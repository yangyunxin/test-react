var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var Dashboard = require('webpack-dashboard');
// var DashboardPlugin = require('webpack-dashboard/plugin');
// var dashboard = new Dashboard();

module.exports = {
	devtool: "source-map",
	entry: {
		app: [
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8080',
			'babel-polyfill',
			path.resolve(__dirname, 'app/index.js'),
		],
		vendor: ['react', 'react-dom', 'remarkable']
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['', '.js', 'jsx'],
		alias: {
			// "react": path.resolve(__dirname, 'node_modules/react/dist/react.js'),
			// "react-dom": path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.js'),
			// "react-router": path.resolve(__dirname, 'node_modules/react-router/dist/react-router.js'),
			// "redux": path.resolve(__dirname, 'node_modules/redux/dist/redux.js'),
		}
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude:/node_modules/,
				loader: 'babel',
				// { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=8192&name=images/[hash].[ext]'// 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("styles.css"),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'), //or development
			__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
		}),
		new HtmlWebpackPlugin({
			template: 'app/index.tpl.html',
			filename: 'index.html',
			inject: true
		}),
		new OpenBrowserPlugin({ url: 'http://localhost:8080/' }),
		// new DashboardPlugin(dashboard.setData),
	]
}