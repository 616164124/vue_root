import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
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
  }
}

export default new Vuex.Store({
  state,
  mutations
})
