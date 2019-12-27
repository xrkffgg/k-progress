import Vue from 'vue'
import App from './App.vue'

import KProgress from './components';
Vue.component('k-progress', KProgress);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
