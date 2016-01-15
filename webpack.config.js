var path = require('path');
module.exports = {
  entry: path.join(__dirname, 'example', 'entry.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'DebugToolbar.js'
  },
  module: {
    loaders: [{
      test: /.jsx/,
      loader: 'babel'
    }]
  }
}