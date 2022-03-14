module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  plugins: [
    // other plugins,var webpack = require('webpack');
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
};
