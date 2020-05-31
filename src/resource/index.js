import axios from 'axios';
import store from '../store';

const resource = axios.create({
  baseURL: 'http://192.168.0.105/api/v1',
  headers: {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

//INTERCEPTOR REQUEST
resource.interceptors.request.use((config) => {
  store.dispatch('setLoadingDialogStatus', true);
  return config;
}, (error) => {
  alert('Ops.. não conseguimos processar sua requisição, tente novamente mais tarde.');
  store.dispatch('setLoadingDialogStatus', false);
  Promise.reject(error)
});

//INTERCEPTOR RESPONSE
resource.interceptors.response.use((response) => {
  store.dispatch('setLoadingDialogStatus', false);
  return response;
}, (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        alert(error.response.data ? error.response.data.message : 'Ops.. algo inesperado aconteceu, tente novamente mais tarde.');
        break;
      case 422:
        alert('Ops.. algumas informações fornecidas estão incorretas, verifique a digitação e tente novamente.');
        break;
      case 500:
        alert(error.response.data ? error.response.data.message : 'Ops.. o servidor não conseguiu processar sua requisição no momento, tente novamente mais tarde.');
        break;
    }
  } else if (error.request) {
    alert('Ops.. não conseguimos processar sua requisição, tente novamente mais tarde.');
  } else {
    alert('Ops.. algo deu errado, tente novamente mais tarde.');
  }

  store.dispatch('setLoadingDialogStatus', false);
  return Promise.reject(error);
});

export default resource;
