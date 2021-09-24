// 1.Enter point of application
// 2.Where to put the output file

const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          
          // ---comment: for options we can create seperate .babelrc ---
          options: {
            presets: [
              "@babel/react" , 
              "@babel/env"
            ]
          }
        }
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    }
  },
  mode: 'development',
};
