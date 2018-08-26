const path = require('path');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  entry: './frontend/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: 'main.js',
    publicPath: {
      development: '/assets',
    }[env],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'frontend'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
