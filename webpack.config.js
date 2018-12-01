module.exports = {
    entry: "./test.js",//唯一入口文件
    output: {
      path: __dirname + "/build",//打包后的文件存放的地方
      filename: "bundle.js",//打包后输出文件的文件名
      libraryTarget: 'umd',
      globalObject: 'typeof self !== \'undefined\' ? self : this',
    },
    mode: 'development' // 设置mode
  }