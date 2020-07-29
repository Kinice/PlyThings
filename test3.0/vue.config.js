/*
* Config for project
* Author: Kinice
*/
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    // https: true,
    port: 8090,
    host: 'localhost',
    hot: true,
    overlay: true,
    openPage: '/',
    proxy: {
      "^/dpi": {
        "target": "https://dss-pre.xiongmaopeilian.com",
        "changeOrigin": true,
        "pathRewrite": {
          "^/dpi": ""
        }
      }
    }    
  },
  chainWebpack: config => {
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  productionSourceMap: false
}
