const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'static/js/[name].bundle.[hash].js',
    chunkFilename: 'static/js/[name].[hash].chunk.js',
    path: path.resolve(__dirname, 'build')
  },
  mode: 'development',
  devServer: {
    contentBase: './build',
    // hotOnly: true,
    port: 4031
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        exclude: [
          /\.(js|mjs|jsx|ts|tsx)$/,
          /\.(css|scss)$/,
          /\.html$/,
          /\.json$/
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
