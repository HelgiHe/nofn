// eslint-disable-next-line
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => {
  return {
    entry: ['./src/index.js'],
    mode: 'production',
    output: {
      filename: 'bundle.js',
      publicPath: '/'
    },
    optimization: {
      runtimeChunk: false,
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      },
      minimizer: [new UglifyJsPlugin()]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          use: [ExtractCssChunks.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                mimetype: 'image/png',
                name: 'images/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                mimetype: 'image/svg+xml',
                name: 'images/[name].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new OptimizeCssAssetsPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new ExtractCssChunks({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
      new CompressionPlugin({
        algorithm: 'gzip'
      })
    ]
  };
};
