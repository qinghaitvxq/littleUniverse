const path = require("path");

module.exports = {
  //entry: "./lib/index.js",
  entry: {
    Icon: "./lib/Icon/index.js",
  },
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "little.js",
  //   libraryTarget: "umd",
  // },
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
    ],
  },
};
