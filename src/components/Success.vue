<template>
  <div class="success">
    <van-icon name="passed" />
    <h1>提交成功</h1>
    <router-link to="/">
      <van-button type="primary" size="large">返回</van-button>
    </router-link>
  </div>
</template>

<style lang="less" scoped>
@import "~@/assets/css/colorVariables.less";
.success {
  text-align: center;
  padding: 120px 40px;
  .van-icon {
    font-size: 8em;
    color: @base;
  }
  h1 {
    color: @base;
    padding: 20px 0;
  }
}
</style>
