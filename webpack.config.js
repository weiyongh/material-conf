const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    //globalObject: 'this', // 添加这个选项
    library: 'material-conf',
    libraryTarget: 'umd'
  },
  //devtool: 'inline-source-map',
  //devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        //test: /\.(?:js|mjs|cjs)$/,
        test: /\.(?:js|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};