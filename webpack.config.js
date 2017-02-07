module.exports = {
  entry: './src/index.jsx',

  output: {
    filename: './public/bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
  }
};
