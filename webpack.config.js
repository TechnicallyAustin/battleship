const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        // ES6 Loader
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // CSS Loader
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // Bootstrap CSS
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")({
                  overrideBrowserslist: ["last 2 versions", "ie >= 9"],
                }),
              ],
            },
          },
          "sass-loader",
        ],
        include: /node_modules/,
      },

      // Bootstrap JavaScript
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: "imports-loader?jQuery=jquery",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
