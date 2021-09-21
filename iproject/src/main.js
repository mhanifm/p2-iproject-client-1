import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueGeolocation)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD20kkFmp4-B82CXrio3XmafycLH-o24fY'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
