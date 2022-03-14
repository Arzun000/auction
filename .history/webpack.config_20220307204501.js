
];
module: {
    loaders: [
     { test: require.resolve("jquery"), loader: "expose?$!expose?jQuery" },
    ],
