module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "https://wechat.sxhuzhen.com/", //对应自己的接口
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/qyDev": {
        target: "https://test.sxhuzhen.com/", //对应自己的接口
        changeOrigin: true,
        // ws: true,
        pathRewrite: { "^/qyDev": "/" }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: ` @import "@/assets/css/hotcss.scss";`
      }
    }
  }
};
