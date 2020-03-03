module.exports = {
  mode: 'development',
  entry: {
    app: './app.js'
  },
  output: {
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: './removeConsole'
          },
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}