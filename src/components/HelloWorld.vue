<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ this.$store.state.count }}</h1>
    <li v-for="(item, index) in alist">{{ item }}----{{ index }}</li>
    <br />

    <li v-if="judgment">1111</li>
    <li v-else>2222</li>
    <button @click="onclick1('kkkk')">按钮4</button>
    <button @click="add()">add</button>
    <button @click="request()">request</button>
    <div id="line"></div>
    <Day01></Day01>
    <div id="line"></div>
    <div>{{ msg }}</div>
    <div id="line"></div>
  </div>
</template>

<script>
import Day01 from "../components/day/day01.vue";
import api from "../utils/request";
import request from "../utils/request";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      alist: ["a", "b", "v", "d"],
      judgment: false
    };
  },
  methods: {
    add() {
      this.$store.commit("mutationsAddCount", 1);
    },
    onclick1(element) {
      console.log(element);
      this.$router.push("/pokweb2/main");
    },
    request() {
      api("get", "/test01", "")
        .then(result => {
          console.log("http");
          console.log(result);
        })
        .catch(err => {});
    }
  },
  components: { Day01 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#line {
  height: 10px;
  width: 100%;
  background-color: red;
}
</style>
