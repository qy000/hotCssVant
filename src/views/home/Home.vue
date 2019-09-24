<template>
  <div class="container">
    <van-checkbox v-model="checked">复选框</van-checkbox>
    <van-datetime-picker
      v-model="currentDate"
      type="datetime"
      :item-height="HTML_DPR * 44"
      :min-date="minDate"
      :max-date="maxDate"
    ></van-datetime-picker>
    <br />
    <br />
    <van-picker
      confirm-button-text="QYQY"
      show-toolbar
      title="标题"
      :item-height="HTML_DPR * 44"
      :columns="columns"
      @cancel="onCancel"
      @confirm="onConfirm"
    />
    <!--<van-picker-->
    <!--title="QYQYQ"-->
    <!--:columns="columns"-->
    <!--:item-heihet="HTML_DPR * 44"-->
    <!--:default-index="2"-->
    <!--@change="onChange"></van-picker>-->
    <div class="qy"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date(),
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      HTML_DPR: document.documentElement.getAttribute("data-dpr")
    };
  },
  methods: {
    onConfirm(value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange(value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      this.$toast("取消");
    }
  }
};
</script>
<style lang="scss">
.qy {
  width: px2rem(375);
  height: px2rem(100);
  background-color: red;
}
</style>
