<template>
  <div class="day02">
    <p>day02 css练习</p>
    <div>
        <p id="p1">12</p>
        <p id="p2">121</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Day02",
  components: {},
  props: [],
  data() {
    return {};
  }
};
</script>

<!-- 加了scoped 表示css只适用于该vue -->
<style style="scss"  scoped>
@import "./day02.scss";
</style>
