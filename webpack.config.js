const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  devtool: 'source-map',
  watch: true,
  optimization: {
    minimize: false
},
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};