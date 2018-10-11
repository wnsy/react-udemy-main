module.exports = {
	entry: "./app/js/main.js", // look for js file
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/, //js or jsx to transpile
				exclude: /node_modules/, //ignore these files in the folder
				loader: 'babel', //what to pipe it through, transpile es6 to older ver
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}
