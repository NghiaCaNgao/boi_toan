const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["./src/index.ts"],
  target: "node",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  mode: "production",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  }
};
