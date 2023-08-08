const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack template', // change this to your own title
      template: path.resolve(__dirname, './src/template.html'),
    }), 
  ],
  module: {
    rules: [
      // Images 
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      // Styles
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // Transpile typescript into javascript first
      { 
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }, 
    ],
  }
}
