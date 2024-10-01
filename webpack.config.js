const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "verint",
    projectName: "app1",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["@verint/utility", "rxjs"]
    // modify the webpack config however you'd like to by adding to this object
  });
};
