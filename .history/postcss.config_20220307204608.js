module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
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
