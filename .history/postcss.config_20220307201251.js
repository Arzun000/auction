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
module: {
  rules: [
    {
      test: require.resolve("jquery"),
      use: [
        {
          loader: "expose-loader",
          options: "$",
        },
      ],
    },
  ];
}
