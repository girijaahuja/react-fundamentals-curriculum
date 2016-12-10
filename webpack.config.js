var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

var config = {
   entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
   devServer: {
      inline: true,
      port: 8080
   },
  
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
        
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   plugins: [HTMLWebpackPluginConfig]
}

module.exports = config;