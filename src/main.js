import Vue from 'vue'
import App from './App.vue'

// importing global styling
import './assets/styles.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
