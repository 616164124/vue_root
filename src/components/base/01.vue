<template>
  <div>
    <div>username: <input v-model="username" type="text" /></div>
    <div>password: <input v-model="password" type="text" /></div>
    <div><button @click="fs()">按钮</button></div>
    <div class="t"></div>
    <div class="line"></div>
    <input v-v-model="users[1].name"/>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: [],
  data() {
    return {
      users: [
        { name: "hu", age: 12 },
        { name: "luo", age: 29 }
      ],
      username: "",
      password: ""
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    fs() {
      console.log(this.username);
    }
  },
  filter: {},
  computed: {},
  watch: {
   
  }
};
</script>

<!-- 加了scoped 表示css只适用于该vue -->
<style scoped>
.t {
  background-color: red;
  width: 100%;
  height: 5px;
}
.line {
  height: 10px;
}
</style>
