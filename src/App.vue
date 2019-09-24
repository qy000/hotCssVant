<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // url: `${this.$baseUrl}user-service/user/wechat/goto?redir=${
      //   this.$baseUrl
      // }qy/dist/index.html`
      url: `${this.$baseUrl}user-service/user/wechat/goto?redir=${
        this.$baseUrl
      }test/index.html`
    };
  },
  methods: {
    getUserInfo(uid) {
      axios({
        method: "post",
        url: "https://wechat.sxhuzhen.com/user-service/faceplus/getUserInfo",
        data: {
          uid: uid
        }
      })
        .then(res => {
          if (!res.status) {
            sessionStorage.setItem("status", 0);
            this.selfDialog();
            return false;
          } else {
            // 已认证
            sessionStorage.setItem("status", res.data.status);
            this.status = sessionStorage.getItem("status");
            var userObj = JSON.parse(sessionStorage.getItem("userDataInfo"));
            userObj.data.chinese_name = res.data.name; // 姓名
            userObj.data.idcard = res.data.id_number; // 身份证
            userObj.data.mobile = res.data.phone; // 手机号码
            userObj.data.sex = res.data.sex; // 性别
            userObj.data.id_valid_date = res.data.id_valid_date; // 身份证有效期
            userObj.data.birth = res.data.birth; // 出生日期
            userObj.data.id_address = res.data.id_address; // 居住地
            userObj.data.id_authority = res.data.id_authority; // 发证单位
            sessionStorage.setItem("userDataInfo", JSON.stringify(userObj));
            sessionStorage.setItem("chinese_name", userObj.data.chinese_name);
            sessionStorage.setItem("idcard", userObj.data.idcard);
            sessionStorage.setItem("mobile", userObj.data.mobile);
            const data = {
              name: userObj.data.chinese_name,
              idcard: userObj.data.idcard,
              phone: userObj.data.mobile
            };
            sessionStorage.setItem("userData", JSON.stringify(data));
            this.$cookie.set("idcard", userObj.data.idcard);
          }
        })
        .catch(e => {
          // console.log("uid错误回调");
        });
    },
    selfDialog() {
      this.$dialog
        .alert({
          title: "山西公安",
          message: "请到山西公安公众号民生警务实名认证"
        })
        .then(() => {
          window.location.href =
            "https://wechat.sxhuzhen.com/dist/index.html#/";
        });
    }
  },
  created() {
    this.$cookie.set("agentUid", "8023a311-a4c6-49c7-8716-3aa42613b9cc");
    // const unionid = sessionStorage.getItem("unionid")
    //   ? sessionStorage.getItem("unionid")
    //   : this.$cookie.get("unionid");
    // if (!unionid) {
    //   window.location.href = this.url;
    // } else {
    //   this.$cookie.set("unionid", unionid);
    //   this.$get("user-service/user/getUserLoginInfo").then(res => {
    //     if (res.data.userid != "") {
    //       sessionStorage.setItem("userDataInfo", JSON.stringify(res));
    //       this.getUserInfo(res.data.userid);
    //     } else {
    //       window.location.href = this.url;
    //     }
    //   });
    // }
  }
};
</script>
<!--<style lang="scss">-->
<!--@import "./assets/css/hotcss.scss";-->
<!--</style>-->
