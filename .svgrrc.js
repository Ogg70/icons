/** @type {import('@svgr/core').Config} */
module.exports = {
  template: require("./component-template"),
  indexTemplate: require("./index-template"),
  outDir: "./src",
  icon: true,
  dimensions: false,
  titleProp: true,
  typescript: true,
  replaceAttrValues: {
    "#000": "currentColor",
  },
  svgo: true,
  svgoConfig: {
    plugins: ["preset-default"],
  },
};
