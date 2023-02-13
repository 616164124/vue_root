<template>
  <div>
    <p>day03</p>
    <div>sss</div>
  </div>
</template>

<script>
export default {
  name:"Day03",
  components: {},
  props: [],
  data() {
    return {
        msg:"hello vue day03"
    };
  },
  created() {
    setInterval((() => {
      console.log("123");
    }),1000)
  },
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {

  },
  filter: {},
  computed: {},
  watch: {},
};

</script>

<!-- 加了scoped 表示css只适用于该vue -->
<style style="scss" scoped>
@import url("./day03.scss");
</style>
