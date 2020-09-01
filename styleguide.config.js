module.exports = {
  components: "lib/**/index.js",
  webpackConfig: Object.assign({}, require("./webpack.config.base.js"), {
    /* Custom config options */
  }),
};
