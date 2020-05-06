const path = require("path")

module.exports = {
    entry: {
        main: ["./src/main.js"]
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist",
        overlay: true,
        port: 8090
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].html"
                        }
                    },
                    {
                        loader: "extract-loader"
                    },
                    {
                        loader: "html-loader",
                        options: {
                            //attrs: ["img:src"]
                            attributes: {
                                list: [
                                    {
                                        tag: 'img',
                                        attribute: 'src',
                                        type: 'src',
                                      },
                                      {
                                        tag: 'img',
                                        attribute: 'srcset',
                                        type: 'srcset',
                                      },
                                      {
                                        tag: 'img',
                                        attribute: 'data-src',
                                        type: 'src',
                                      },
                                      {
                                        tag: 'img',
                                        attribute: 'data-srcset',
                                        type: 'srcset',
                                      },
                                ]
                            }
                        }
                        
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name]-[hash:8].[ext]"
                        }
                    }
                ]
            }
            
        ]
    }
}