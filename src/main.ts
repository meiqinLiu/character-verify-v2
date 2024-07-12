import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vplugin from './components/index'

// Vue.use(store).use(router).use(vplugin).mount('#app')

Vue.use(vplugin)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
