var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/script/main.js',
	output: {
		path: "./dist",
		filename: 'js/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!postcss-loader!sass-loader'
			}
		]
	},
	plugins: [
       	new webpack.LoaderOptionsPlugin({
         // test: /\.xxx$/, // may apply this only for some modules
         	options: {
           		postcss: [
					require('autoprefixer')({//设置css的样式对于不同浏览器添加前缀
						broswers: ['last 5 versions']
					})
				]
         	}
       })
    ]
	
}