const state = {
  drawer: null,
  loadingDialog: false
};

const getters = {
  getDrawerStatus(state) {
    return state.drawer;
  },
  getLoadingDialog(state) {
    return state.loadingDialog;
  }
};

const mutations = {
  SET_DRAWER_STATUS(state, status) {
    state.drawer = status;
  },
  SET_LOADING_DIALOG_STATUS(state, status) {
    state.loadingDialog = status;
  }
};

const actions = {
  setDrawerStatus(context, status) {
    context.commit('SET_DRAWER_STATUS', status);
  },
  setLoadingDialogStatus(context, status) {
    context.commit('SET_LOADING_DIALOG_STATUS', status);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
