const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// Загружаем переменные окружения
require('dotenv').config();

const IS_PRODE = process.env.IS_PRODE;
console.log('Environment variables:', process.env.YAY, process.env.IS_PRODE);
module.exports = {
  mode: 'development',
  entry: {
    index: './index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env')
    }),
    new webpack.DefinePlugin({
      'process.env.YAY': JSON.stringify(process.env.YAY),
      'process.env.IS_PRODE': JSON.stringify(process.env.IS_PRODE),
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: 'index.html',
      hash: true,
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './public'),
    },
    compress: true,
    port: 9000,
  },
};
