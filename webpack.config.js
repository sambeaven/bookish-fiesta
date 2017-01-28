var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");

var config = {
    entry: DEV + "/index.jsx",
    output: {
        path: OUTPUT,
        filename: "index.js"
    },
    module: {
        loaders: [{
            include: DEV,
            loader: "babel"
        }]
    }
}

module.exports = config;