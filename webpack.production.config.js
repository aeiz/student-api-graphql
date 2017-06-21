var path = require("path");
var node_modules_dir = path.resolve(__dirname, "node_modules");
var babelSettings = {
  presets: ["es2015", "react"],
  plugins: ["transform-object-rest-spread"]
};
var webpack = require("webpack");

var config = {
  devtool: "cheap-source-map",
  entry: {
    app: path.resolve(__dirname, "client/index.js")
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        // There is not need to run the loader through
        // vendors
        exclude: [node_modules_dir],
        include: path.join(__dirname, "client"),
        loaders: ["babel-loader?" + JSON.stringify(babelSettings)]
      },
      {
        test: /\.css$/,
        loader: "style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.optimize.UglifyJsPlugin({minimize: true}),
  ]
};

module.exports = config;
