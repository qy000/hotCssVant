# wx-public

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### vue.config.js 配置了代理,解决开发时正式接口的跨域,但是还有水平越权问题、
```
 devServer: {
    proxy: {
      "/api": {
        target: "https://wechat.sxhuzhen.com/", //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "/api": "/"
        }
      },
      "/qyDev": {
        target: "https://test.sxhuzhen.com/", //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "/qyDev": "/"
        }
      }
    }
  }
```
### 关键词/api 目前是全局配置到了（开发）axios.js,
```
// 判断是否为开发环境 /qyDev/(测试)  /api/ (正式)
// getUrl("dev")  'dev' 发布测试环境 不传值 发布正式环境
const baseUrl =
  process.env.BASE_URL +
  (process.env.NODE_ENV === "production" ? getUrl("dev") : "/qyDev");
```
