var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var devConfig = require('./webpack.config.dev.js');
var prodConfig = require('./webpack.config.prod.js');
console.log(process.env.NODE_ENV.trim())

var debug = process.env.NODE_ENV.trim() !== 'production';
const port = debug ? 8080 : 9090;

function baseConfig(config) {
	console.log(config.output.path)
	return new webpackDevServer(webpack(config), {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		// quiet: true,
		contentBase: config.output.path,
		stats: { colors: true }
	})
}
var server;
if (debug) {
	server = baseConfig(devConfig);
	console.log("development mode...");
} else {
	server = baseConfig(prodConfig);
	console.log("production mode...");
}

server.listen(port, "localhost", function (err) {
	if (err) console.log(err);

	console.log('Listening at localhost:'+ port +'...')
})