
];
module: {
    loaders: [
     { test: require.resolve("jquery"), loader: "expose?$!expose?jQuery" },
    ],
    plugins: [
        // other plugins,
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
        }),
   }
