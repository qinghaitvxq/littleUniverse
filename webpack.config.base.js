const path = require("path");

module.exports = {
  entry: {
    index: "./lib/index.js",
    Icon: "./lib/Icon/index.js",
    DrawImageCenter: "./lib/DrawImageCenter/index.js",
    SelectAll: "./lib/SelectAll/index.js",
    // Test: "./lib/Test/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/index.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        options: {},
      },
      {
        test: /\.s([ac])ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
