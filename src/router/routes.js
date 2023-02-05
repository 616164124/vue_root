import Vue from 'vue'
import Router from 'vue-router'
import day from './day';
import pokweb from "./pokweb"


Vue.use(Router)

const routs = [...day, ...pokweb]
export default new Router({
  routes: routs,
  mode:'history' //去掉网址中的#
})
