const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/Index/index.html",
    filename: "./index.html"
});

module.exports = {
    devtool: 'inline-source-map',  
    optimization: {
        splitChunks:{
            cacheGroups: {
                node_modules: {
                    name: 'node_modules',
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