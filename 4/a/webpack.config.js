const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    about: './src/about.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /(\.js$|jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["shared", "vendor"],  // namesに変更し、"shared"を追加
      minChunks: (module, count) => {
        if (module.context && module.context.includes("node_modules")){
          return true;
        }
        if (count >= 2) {
          // 2回以上使用されていたら、対象とする
          return true;
        }
        return false;
      },
    })
  ]
};