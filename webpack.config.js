const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack template', // change it to your own title
      template: path.resolve(__dirname, './src/template.html'), // template html
      filename: 'index.html', // output html
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // Images 
      {
        test: /\.(gif|png|jpe?g)$/i,
        type: 'asset/resource',
      },
      // Styles
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // Transpile typescript into javascript first
      { 
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }, 
    ],
  },
  resolve: {
    // no need to add extension when important these files
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    hot: true,
    port: 8080,
  },
}
