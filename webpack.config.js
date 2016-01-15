var path = require('path');
module.exports = {
  entry: path.join(__dirname, 'example', 'entry.jsx'),
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /.jsx/,
      loader: 'babel'
    }]
  }
}