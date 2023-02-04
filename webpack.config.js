const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/Index/index.html",
    filename: "./index.html"
});

module.exports = {
    devtool:"inline-source-map",
    output: {
        path: __dirname + '/docs'
    },
    stats: 'errors-only',
    devServer: {
        clientLogLevel: 'silent'
      },
    optimization: {
        splitChunks:{
            cacheGroups: {
                modules: {
                    name: 'modules',
                    chunks: 'all',
                    test: /node_modules/
                },
                common: {
					test: /src/,
					name: `src`,
					chunks: "all"
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(node_modules[\\/]@?reactflow)\/).*/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    
                    {
                        "loader": "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [htmlWebpackPlugin]
};