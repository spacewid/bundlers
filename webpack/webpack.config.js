const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      /* {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                process.env.NODE_ENV === 'development' && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      }, */
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: 'index.html',
      hash: true,
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './public'),
    },
    compress: true,
    port: 9000,
  },
};
