const path = require('path');
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: './javascript/index.js',
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: {
            globalName: "$",
            override: true,
          },
        },
      },
    ],
  },
};