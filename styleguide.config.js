module.exports = {
  components: "lib/**/index.js",
  webpackConfig: Object.assign({}, require("./webpack.config.base.js"), {
    /* Custom config options */
  }),
  ignore: [
    "lib/index.js",
    "lib/Icon/index.js",
    "lib/ReactCascaderCategory/CascaderTree/index.js",
    "lib/ReactCascaderCategory/InputBar/index.js",
  ],
};
