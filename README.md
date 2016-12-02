webpack 打包配置 npm install -g webpack
webpack-dev-server开发配置 npm install -g webpack-dev-server

CommonsChunkPlugin 它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用。
那么什么是多入口，什么时候做多入口


babel
babel loader 
	处理jsx语法编译，es6转换
img loader
	对于小于某某的图片直接转成base64，而其他图片依旧打包在build目录下，所以你要配置一下图片路径， base64就是一个编码格式，那样就减少了http请求
css loader
	处理css模块加载
	 extract-text-webpack-plugin css不被打包

cdn externals


if (__DEV__) {
  console.warn('Extra logging');
}
// ...
if (__PRERELEASE__) {
  showSecretFeature();
}

* babel-loader: 转换JSX
* babel-core: 即babel的包
* babel-preset-es2015: es2015的babel预设
* babel-preset-react: react的babel预设



自动刷新 webpack-dev-server
热刷新