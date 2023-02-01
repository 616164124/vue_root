<template>
  <div>
    <div>{{ data }}</div>
    <van-button loading type="primary">主要按钮</van-button>
    <van-button round type="info" class="stn">圆形按钮</van-button>
    <van-button square type="primary" @click="square()">方形按钮</van-button>
    <Day01_01></Day01_01>  
  </div>
</template>

<script>
import Day01_01 from "../day/day01_01.vue"
import Vue from "vue";
import { Button } from "vant";

Vue.use(Button);
export default {
  name: "Day01",
  components: {Day01_01},
  props: [],
  data() {
    return {
      data: "this is root"
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    square() {
      console.log("square");
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<!-- 加了scoped 表示css只适用于该vue -->
<style style="less" scoped>
.stn{
    background-color: blue;
}

</style>
