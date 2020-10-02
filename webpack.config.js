module.exports = {
    context: __dirname,
    entry: 'src/app.ts',
    output: {
        path: __dirname + '/public',
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                        loader: "babel-loader"
                    }]
            }
        ]
    }
}
