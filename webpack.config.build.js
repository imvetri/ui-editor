const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/Index/index.html",
    filename: "./index.html"
});

module.exports = {
    output: {
        path: __dirname + '/dist'
    },
    stats: 'errors-only',
    devServer: {
        clientLogLevel: 'silent'
      },
    optimization: {
        minimize: false,
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
                exclude: /node_modules/,
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