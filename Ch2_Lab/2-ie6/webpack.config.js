module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
          // babel 7: presets: ['@babel/preset-env']
        }
      }
    }]
  },
  devtool: 'source-map',
  mode: 'development'
};