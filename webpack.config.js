const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/Index/index.html",
    filename: "./index.html"
});

module.exports = {
    devtool: 'inline-source-map',
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
                test: /\.lcss$/,
                use: [
                    
                    {
                        "loader": "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                          modules: true,
                          importLoaders: 1,
                          localIdentName: "[name]_[local]_[hash:base64]",
                          sourceMap: true
                        }
                      }
                ]
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