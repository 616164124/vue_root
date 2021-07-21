<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <il v-for=" itme in alist">{{itme}}</il>
    <il v-for=" itme in alist">{{itme}}</il>
    <il v-if="judgment">jfjl</il>
    <il v-else>1111</il>
    <il v-if="!judgment">ppppp</il>
    <il v-else>1111</il>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      alist:['a','b','v','d'],
      judgment: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>
