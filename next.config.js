// const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
// const withCSS = require("@zeit/next-css");
// const withSass = require("@zeit/next-sass");
// const webpack = require("webpack");
// const path = require("path");

// module.exports = withPlugins([[withCSS], [withImages]], {
module.exports = withImages({
  webpack(config, options) {
    // config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  // node: {
  //   fs: "empty",
  // },
});
