import Vue from "vue";
import Vuex from "vuex";
import file from "@/modules/file";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    file,
  },
});
