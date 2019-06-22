const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // production默认模式(打包的文件已压缩);   development(打包的文件未压缩),默认使用sourceMap
    mode: "development", 
    // source-map获取报错代码在源代码的位置，并生成.map文件; inline-source-map不生成.map文件
    devtool: 'inline-source-map',
    // 打包入口
    entry: {
        "main": "./src/main.js"
    },
    // 打包出口
    output: {
        // name相当于entry中的键值
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    // webpack默认打包的是js，如果遇到打包其他文件，则需要在此处说明使用哪个加载器loader识别其他文件
    module: {
        rules: [{
                test: /\.vue$/,
                use: [ 'vue-loader' ]
            },
            {
                test: /\.(styl(us)|css)?$/,
                loader: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                // 正则匹配所有符合要求的文件
                test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/,
                // 使用url-loader对图片进行处理
                use: [
                    {
                        loader: 'url-loader',
                        // 将小于8K的图片以base64的形式打包到js文件中
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    // 配置webpack-dev-server
    devServer: {
        // 自动打开相应地HTML文件
        open: true
    },
    // plugin可以在webpack运行到某个时刻时，自动帮助你完成一些事情
    plugins: [
        // 打包之前运行该插件；该插件是通过清理dist目录，然后重新打包该新目录
        // 最新版不需要接受参数
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        // 打包之后运行该插件
        // 该插件会在打包结束后，根据下面的template自动生成HTML文件到dist目录下
        // 并把打包生成的js自动引入到这个HTML文件中
            template: './index.html'
        }),
        // 使用webpack中的插件，热模块更新，实现css样式热更新和多个模块的数据改动时，他们之间的数据不影响
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            // 使得vue运行在Runtime状态下
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}