const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: path.join(__dirname, 'src/index.js'),
    service_worker: path.join(__dirname, 'src/background'),
    content: path.join(__dirname, 'src/content'),
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'js/[name].js',
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
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
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-flexbugs-fixes',
                  [
                    'postcss-preset-env',
                    {
                      autoprefixer: {
                        flexbox: 'no-2009',
                      },
                      stage: 3,
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      excludeChunks: ['service_worker', 'content'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'build'),
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
};
