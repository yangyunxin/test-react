var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
	devtool: "source-map",
	entry: {
		app: [
			'webpack-dev-server/client?http://localhost:9090',
			path.resolve(__dirname, 'app/index.js'),
		],
		vendor: ['react', 'react-dom']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash:8].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['', '.js', 'jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude:/node_modules/,
				loader: 'babel',
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
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("styles.css"),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new HtmlWebpackPlugin({
			template: 'app/index.tpl.html',
			filename: 'index.html',
			inject: true
		}),
		new DashboardPlugin(),
		new OpenBrowserPlugin({ url: 'http://localhost:9090/' })
	]
}