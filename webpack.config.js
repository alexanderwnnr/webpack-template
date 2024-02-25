const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'static/js/bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
			test: /\.js$/,
			exclude: /node_modeles/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			}
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({template: 'public/index.html'})],
	devServer: {
		static: {
		directory: path.join(__dirname, 'build')
		},
		compress: true,
		port: 3000,
		historyApiFallback: true
	},
	resolve: {
		extensions: ['.js', '.jsx'] 
	}
}
