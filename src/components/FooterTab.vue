<template>
  <van-tabbar v-model="active">
    <van-tabbar-item v-for="item in allRouter" :key="item.name" :to="item.path">
      <span>{{ item.title }}</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? item.icon.active : item.icon.normal"
      />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  computed: {
    allRouter() {
      const routers = this.$router.options.routes.filter(item => item.title);
      routers.map((value, index) => {
        if (this.$route.name === value.name) {
          this.active = index;
        }
      });
      return routers;
    }
  }
};
</script>
