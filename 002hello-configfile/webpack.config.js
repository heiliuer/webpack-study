/**
 * Created by Administrator on 2016/10/31.
 */
module.exports = {
    entry: "./js/Main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {"test": /\.css$/, loader: "style!css"}
        ]
    }
}