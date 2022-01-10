import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Vuex from 'vuex'

Vue.use(Vuex)
import state from './state'
import getters from './getters'
import mutations from './mutations'
const store = new Vuex.Store({
  state,
  getters,
  mutations
})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
