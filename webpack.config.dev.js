const base = require("./webpack.config.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = Object.assign({}, base, {
  mode: "development",
  entry: {
    example: "./example.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
});
