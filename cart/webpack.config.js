const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container 


module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
     
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart_micro',
            filename: 'remoteEntry.js',
            exposes: {
                './CartView': './src/index'
            },
      
        }),
        new HtmlWebpackPlugin({
            template: "/public/index.html"
        }),
     
    ]
}