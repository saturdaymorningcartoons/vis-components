const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './examples/js/app.js'),
  output: {
    path: path.resolve(__dirname, './examples/dist'),
    filename: 'app.bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
