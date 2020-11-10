const port = process.env.PORT || 3000;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
});

module.exports = {
  mode: 'development',
  entry: { app: ['babel-polyfill', './src/index.js'] },
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({ 'process.env': JSON.stringify(dotenv.parsed) }),
  ],
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    port: port,
    open: true,
  },
};
