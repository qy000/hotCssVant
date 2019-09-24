import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home/Home.vue";
import OnlineExam from "../views/onlineExam/onlineExam.vue";
import FreeApply from "../views/freeApply/freeApply.vue";
import userCenter from "../views/userCenter/userCenter.vue";
// import PublicSecurity from "./modules/publicSecurity.js";
// import TrafficPolice from "./modules/trafficPolice.js";
// import ExitAndEntry from "./modules/exitAndEntry.js";
// import DrugControl from "./modules/drugControl.js";
// import Others from "./modules/others.js";
// const ServiceList = () => import("@/components/ServiceList.vue");
// const NoticeView = () => import("@/components/NoticeView.vue");
// const ServiceRouter = PublicSecurity.concat(
//   // TrafficPolice,
//   // ExitAndEntry,
//   // DrugControl,
//   // Others
// );

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      // title: "在线考试",
      icon: {
        normal: require("../assets/images/index/service.png"),
        active: require("../assets/images/index/service_active.png")
      },
      component: Home
    },
    // 在线考试
    {
      path: "/onlineExam",
      name: "onlineExam",
      title: "在线考试",
      icon: {
        normal: require("../assets/images/index/hall.png"),
        active: require("../assets/images/index/hall_active.png")
      },
      component: OnlineExam,
      // children: ServiceRouter
    },
    // 免分申请
    {
      path: "/freeApply",
      name: "freeApply",
      title: "免分申请",
      icon: {
        normal: require("../assets/images/index/hall.png"),
        active: require("../assets/images/index/hall_active.png")
      },
      component: FreeApply,
      // children: ServiceRouter
    },
    // 用户中心
    {
      path: "/userCenter",
      name: "userCenter",
      title: "企业中心",
      icon: {
        normal: require("../assets/images/index/center.png"),
        active: require("../assets/images/index/center_active.png")
      },
      component: userCenter,
      children: [
        // 我的考试
        {
          path: "myExam",
          name: "myExam",
          component: () =>
            import(/* webpackChunkName: "chunk-qyzx" */ "@/views/userCenter/myExam/myExam.vue")
        },
        // 我的申请
        {
          path: "myApply",
          name: "myApply",
          component: () =>
            import(/* webpackChunkName: "chunk-qyzx" */ "@/views/userCenter/myApply/myApply.vue")
        },
        // 驾驶证
        {
          path: "driverLicense",
          name: "driverLicense",
          component: () =>
            import(/* webpackChunkName: "chunk-qyzx" */ "@/views/userCenter/driverLicense/driverLicense.vue")
        },
        //机动车
        {
          path: "motorVehicle",
          name: "motorVehicle",
          component: () =>
            import(/* webpackChunkName: "chunk-qyzx" */ "@/views/userCenter/motorVehicle/motorVehicle.vue")
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  // const qyStep = sessionStorage.getItem("qyStep");
  next();
  // const routerName = ["login", "useragreement", "register", "setPassword"];
  // if (routerName.includes(to.name)) {
  //   next();
  // } else {
  //   if (qyStep) {
  //     next();
  //   } else {
  //     next("/login");
  //   }
  // }
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
