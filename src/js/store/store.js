import Vue from 'vue';
import Vuex from 'vuex';
import guard from './modules/Characters/Guard';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    guard
  },
});
