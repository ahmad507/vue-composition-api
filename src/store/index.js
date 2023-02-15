import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter : 0
  },
  getters: {
    counter (state) {
      return state.counter
    }
  },
  mutations: {
    SET_COUNTER(state,  value)
    {
      state.counter = value
    }
  },
  actions: {
    increment({commit, state}, inc)
    {
      commit('SET_COUNTER', state.counter + inc)
    },
    decrement({commit, state}, dec)
    {
      commit('SET_COUNTER', state.counter - dec)
    }
  },
  modules: {
  }
})
