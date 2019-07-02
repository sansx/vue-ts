// vue.config.js
module.exports = {
  // 选项...
  productionSourceMap: false,
  configureWebpack: {
    devServer: {
      hot: false
    }
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule("vue")
  //     .use("vue-loader")
  //     .loader("vue-loader")
  //     .tap(options => {
  //       // 修改它的选项...
  //       return { ...options, hotReload: false };
  //     });
  // }
};
