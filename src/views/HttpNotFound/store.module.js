const state = {
  httpNotFoundPage: {

  },
  httpNotFoundPageLoading: false,
};

const getters = {
  getHttpNotFoundPageLoadingStatus(state) {
    return state.httpNotFoundPageLoading;
  },
};

const mutations = {
  SET_HTTP_NOT_FOUND_PAGE_LOADING_STATUS(state, status) {
    state.httpNotFoundPageLoading = status;
  },
};

const actions = {
  fetch(context) {
    context.commit('SET_HTTP_NOT_FOUND_PAGE_LOADING_STATUS', true);
    context.commit('SET_HTTP_NOT_FOUND_PAGE_LOADING_STATUS', false);
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};