module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.(png|jpg)$/,
        loader: "url?limit=25000"
      }
    ]
  }
};
