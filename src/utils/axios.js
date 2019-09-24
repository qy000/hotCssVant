import axios from "axios";
import qs from "qs";
// import Router from "vue-router";
import { Toast } from "vant";

// axios请求超时设置
// axios.defaults.timeout = 300000;
// 根据环境设置不同的baseUrl
const baseUrl =
  process.env.BASE_URL +
  (process.env.NODE_ENV === "production" ? getUrl() : "/api");
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    config.baseURL = baseUrl;
    // config.withCredentials = true;
    config.timeout = 90000;
    // config.data = config.data;
    return config;
  },
  error => Promise.reject(error)
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data && response.data.body && !response.data.body.status) {
      Toast.fail("登录已无效，请重新登录");
      if (!process.env.NODE_ENV === "production") {
        setTimeout(() => {
          sessionStorage.clear();
          window.location.href =
            axios.defaults.baseURL +
            "/user-service/user/wechat/reLogin?redir=" +
            window.location.href;
        }, 3000);
      }
    }
    return response.data;
  },
  error => {
    if (error.request) {
      if (error.message.includes("timeout")) {
        // timeOut
        Toast.clear();
        Toast.fail("请求超时");
      }
    }
    console.log();
    Promise.reject(error);
  }
);

/**
 * 封装get请求
 * @param url
 * @param data
 */
async function get(url, params = {}) {
  return await axios.get(url, {
    params: params
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 */
async function post(url, data = {}) {
  return await axios.post(url, qs.stringify(data), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

/**
 * 封装file请求
 * @param url
 * @param data
 */
async function file(url, data = {}) {
  return await axios.post(url, data);
}

function getUrl(type) {
  if (!type) return "https://wechat.sxhuzhen.com/";
  if (type === "dev") return "https://test.sxhuzhen.com/";
}
export { get, post, file, baseUrl };
