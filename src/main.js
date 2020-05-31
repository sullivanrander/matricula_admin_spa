import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.prototype.$rules = {
  required: value => !(value === '' || value === null || value === undefined) || 'Campo obrigatório',
  email: value => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || 'e-mail inválido',
  telephone: value => (value.length === 10 || value.length === 12) || 'O número de telefone deve conter entre 10 e 12 digitos',
  cpf: value => (value.length === 11) || 'O CPF deve conter 11 digitos',
};

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
