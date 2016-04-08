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
			'webpack-dev-server/client?http://localhost:3000',
    		'webpack/hot/only-dev-server',
			'./src/Logentry'
		]
	},
	output: {
		path: __dirname + '/src/',
		filename: '[name].js',
		publicPath: '/src/'  // 网站运行时的访问路径(开发调试用)，与html中对应
	},
	// resolve: {
 //        extensions: ['', '.js', '.jsx']
 //    },
	plugins: [
    	new webpack.HotModuleReplacementPlugin()
  	],
  	module: {
  		loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                //添加两个presents 使用这两种presets处理js或者jsx文件
                presets: ['es2015', 'react']
            }
        }, { 
  			 test: /\.(png|jpg)$/, 
  			 loader: 'url-loader'
  		}, { 
  			 test: /\.css$/, 
  			 loaders: ['style-loader', 'css-loader']
  		}, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.less$/,
            loaders: ['style', 'css', 'less']
        }, {
        	test: /\.js$/,
        	loader: 'react-hot',
        	include: path.join(__dirname, 'src')
        }]
  	}
}