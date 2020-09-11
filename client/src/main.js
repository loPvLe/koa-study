import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import router from './router'
import axios from '@/utils/axios'

import 'vant/lib/index.css';
import '@/assets/css/index.css'

Vue.use(Vant);

Vue.prototype.http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
