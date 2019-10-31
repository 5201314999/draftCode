const path = require("path");

console.log(__dirname);
module.exports = {
  mode: "production",
  entry: {
    test: path.resolve(__dirname, "./js/test.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./js")
  },    
};
