const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: "./test.js",//唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle.js",//打包后输出文件的文件名
    },
    mode: 'development', // 设置mode
    // 热编译
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,
        port:9090 //可自定义端口
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin,
      new HTMLWebpackPlugin({
           title:'首页',   //生成的页面标题
           filename:'index.html',  //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，
           template:'index.html'  //根据index.html这个模版来生成（这个文件请自己生成）
       })
   ]
}