import Vue from 'vue'
import Mint from 'mint-ui';
import App from './App.vue'
import 'mint-ui/lib/style.css'
import '@/assets/css/index.css'

Vue.use(Mint);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')