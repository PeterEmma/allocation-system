var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: {
		bindle: [
			'webpack-dev-server/client?http://localhost:3000',
    		'webpack/hot/only-dev-server',
    		'./src/entry'
		],
		Logbindle: [
			'./src/Logentry'
		]
	},
	output: {
		path: __dirname + '/src/',
		filename: '[name].js',
		publicPath: '/src/'  // 网站运行时的访问路径(开发调试用)，与html中对应
	},
	plugins: [
    	new webpack.HotModuleReplacementPlugin()
  	],
  	module: {
  		loaders: [
  			{ test: /\.js$/, loaders: ['react-hot', 'jsx-loader'],include: path.join(__dirname, 'src')},
  			{ test: /\.(png|jpg)$/, loader: 'url-loader'},
  			{ test: /\.css$/, loaders: ['style-loader', 'css-loader']}
  		]
  	}
}