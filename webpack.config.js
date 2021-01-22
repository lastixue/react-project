const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader:'babel-loader'
        },
      ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ]
    
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path:path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath:'/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './dist/index.html'
   })
 
  ],
  performance: { hints: false },
  devServer: {
    contentBase: './dist',
    port: 8000,
    open:true,
    hot:true,
    historyApiFallback: true,
  },
};
