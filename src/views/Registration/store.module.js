import resource from '../../resource';

const state = {
  registrations: null,
};

const getters = {
  getRegistrations(state) {
    return state.registrations;
  },
};

const mutations = {
  SET_REGISTRATIONS(state, data) {
    state.registrations = data;
  },
};

const actions = {
  fetchRegistrations(context) {
    return resource.get(`/registrations`)
      .then((response) => {
        context.commit('SET_REGISTRATIONS', response.data);
        return Promise.resolve(response);
      }).catch((error) => {
        return Promise.reject(error);
      });
  },
  fetchRegistration(context, data) {
    return resource.get(`/registrations/${data.registration_id}`)
      .then((response) => {
        return Promise.resolve(response);
      }).catch((error) => {
        return Promise.reject(error);
      });
  },
  searchRegistrations(context, data) {
    return resource.get(`/registrations`, { params: { name: data.name } })
      .then((response) => {
        context.commit('SET_REGISTRATIONS', response.data);
        return Promise.resolve(response);
      }).catch((error) => {
        return Promise.reject(error);
      });
  },
  toRegistrationsPage(context, data) {
    return resource.get(`/registrations`, { params: { name: data.name, page: data.page } })
      .then((response) => {
        context.commit('SET_REGISTRATIONS', response.data);
        return Promise.resolve(response);
      }).catch((error) => {
        return Promise.reject(error);
      });
  },
  createRegistration(context, data) {
    return resource.post(`/registrations`, data.registration)
      .then((response) => {
        return Promise.resolve(response);
      }).catch((error) => {
        return Promise.reject(error);
      });
  },
  updateRegistration(context, data) {
    return resource.put(`/registrations/${data.registration_id}`, data.registration)
      .then((response) => {
        return Promise.resolve(response);
      }).catch((error) => {
        return Promise.reject(error);
      });
  },
  deleteRegistration(context, data) {
    return resource.delete(`/registrations/${data.registration_id}`)
      .then((response) => {
        return Promise.resolve(response);
      }).catch((error) => {
        return Promise.reject(error);
      });
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};