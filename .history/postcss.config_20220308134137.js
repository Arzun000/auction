module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  plugins: [
    // other plugins,
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
};
