<template>
  <div class="st10">
    day01-01
  </div>
</template>

<script>
//d:/7code/vue_root/src/utils/data 可以用绝对路径
import data from "../../utils/data.json"


export default {
  name:"Day01_01",
  components: {},
  props: [],
  data() {
    return {

    };
  },
  created() {
    console.log(data.sys[0].value);
  },
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {},
  filter: {},
  computed: {},
  watch: {},
};

</script>

<!-- 加了scoped 表示css只适用于该vue -->
<style style="scss" scoped>
@import url("./day01_01.css");

</style>
