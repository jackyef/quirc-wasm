const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const QuircWasmPlugin = require('../../publish/dist/webpack-plugins');

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  node: {
    fs: "empty"
  },
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd"
  },
  // externals: /publish/,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|publish)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/transform-runtime"],
          }
        }
      },
      {
        test: /\.(wasm)$/,
        type: "javascript/auto",
        use: [
          {
            loader: "file-loader",
            options: {
              name(_file) {
                if (process.env.NODE_ENV === "development") {
                  return "[path][name].[ext]";
                } else {
                  return "[contenthash].[ext]";
                }
              },
              // publicPath: "quirc-wasm-emcc/",
              // postTransformPublicPath: p => `__PUBLIC_PATH__ + ${p}`
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      __PUBLIC_PATH__: '"http://localhost:8000/"',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    }),
    new webpack.ProgressPlugin({
      entries: true,
      modules: true,
      modulesCount: 100,
      profile: true,
    }),
    new QuircWasmPlugin(),
  ]
};
