import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from "../components/main/Main";
import Main2 from "../components/main/Main2.vue"
Vue.use(Router)

let base="pokweb"
export default new Router({
  routes: [
    {
      path: "/pokweb",
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pokweb/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/pokweb2/main',
      name: 'Main2',
      component: Main2
    },
  ],
})
