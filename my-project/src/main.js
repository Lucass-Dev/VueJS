import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('dateFormat', (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
