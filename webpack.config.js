const PATH = require( 'path' );
const HTMLWPP = require( 'html-webpack-plugin' );

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: './build/[name].js',
    path: PATH.join( __dirname, './public' )
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|eot|svg|ttf|woff2?|otf)$/,
        use: [ {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        } ]
      }
    ]
  },
  plugins: [
    new HTMLWPP( {
      template: './src/index.html'
    } )
  ],
  devServer: {
    historyApiFallback: true,
  }
}