import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  shop: "水果店"
  
}


/**
 * mutations 里面放置的是我们操作state对象属性的方法
 */
const mutations = {
  mutationsAddCount(state, n = 1) {
    return (state.count += 1)
  },
  mutationsReduceCount(state, n = 1) {
    return (state.count -= 1)
  },
  change1(state, name) {
    return (state.shop = name)
  }
}


export default new Vuex.Store({
  state,
  mutations
})
