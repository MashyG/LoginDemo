const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
        "main": "./src/main.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [ 'vue-loader' ]
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
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