<template>
  <div>
    <div>{{ data }}</div>
    <van-button loading type="primary">主要按钮</van-button>
    <van-button round type="info" class="stn">圆形按钮</van-button>
    <van-button square type="primary" @click="square()">方形按钮</van-button>

    <div>{{ this.$store.state.shop }}</div>
    <Day01_01></Day01_01>  
    <Day02></Day02>
  </div>
</template>

<script>
import Day02 from "./day02.vue";
import Day01_01 from "../day/day01_01.vue";
import Vue from "vue";
import { Button } from "vant";

Vue.use(Button);

export default {
  name: "Day01",
  components: {Day01_01,Day02},
  props: [],
  data() {
    return {
      data: "this is root"

    };
  },
  created() {
  },
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    square() {
      this.$store.commit("change1","医药店")
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
