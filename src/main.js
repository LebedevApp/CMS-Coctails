import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'

import DefaultLayout from './layout/default'
import EmptyLayout from './layout/empty'
import ErrorsLayout from './layout/errors'

Vue.use(Vuelidate)

Vue.component("default-layout", DefaultLayout)
Vue.component("empty-layout", EmptyLayout)
Vue.component("error-layout", ErrorsLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
