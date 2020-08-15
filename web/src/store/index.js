import Vue from "vue"
import Vuex from "vuex"
import file from "@/modules/file"
import loading from "@/modules/loading"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    file,
    loading
  }
})
