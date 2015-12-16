module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './app/index.js',
  ],
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
};
