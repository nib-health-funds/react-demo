module.exports = {
  entry: './src/assets/index.js',
  output: {
    filename: 'dist/bundled.wp.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          //cacheDirectory: '/tmp',
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  }
};
