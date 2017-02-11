
var webpack = require('webpack');

module.exports = {
  entry: './src/ui.js',
  output: { path: __dirname, filename: 'public/js/bundle.js' },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
	{
		test: /\.json$/,
		loader:'json-loader'
	}
    ]
  },
};


