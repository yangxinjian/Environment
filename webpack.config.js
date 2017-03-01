var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/script/main.js',
	output: {
		path: "/Users/yangxinjian/Documents/workspace/company/Environment/dist/",
		filename: 'js/main.js'
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
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=20192&name=[name].[ext]'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
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
        }),
        new webpack.ProvidePlugin({
        	$: 'jquery',
        	jQuery: 'jquery',
        	"window.jQuery": 'jquery'
        })
    ]
	
}