module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
const webpack = require("webpack");
new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  "window.jQuery": "jquery",
});
