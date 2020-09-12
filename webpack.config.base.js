const path = require("path");

module.exports = {
  entry: {
    index: "./lib/index.js",
    //Icon: "./lib/Icon/index.js",
    DrawImageCenter: "./lib/DrawImageCenter/index.js",
    SelectAll: "./lib/SelectAll/index.js",
    ReactCascaderCategory: "./lib/ReactCascaderCategory/index.js",
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
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                path.resolve(__dirname, "lib/commonStyle/variable.scss"),
                path.resolve(__dirname, "lib/commonStyle/common.scss"),
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
