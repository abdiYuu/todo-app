const path = require('path');

module.exports = {
	mode:'development',
	entry:{
		model:'./src/model.js',
		view:'./src/view.js',
	},
	devtool:'inline-source-map',
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test:/\.css$/i,
				use:['style-loader', 'css-loader'],
			},
		],
	},
}
