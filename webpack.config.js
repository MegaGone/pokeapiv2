const path = require("path");

module.exports = {
  entry: "./src/UI/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }],
  },
};
