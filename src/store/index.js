import Vue from 'vue';
import Vuex from 'vuex';

import application from "../views/Application/store.module";
import course from "../views/Course/store.module";
import httpNotFound from "../views/HttpNotFound/store.module";
import registration from "../views/Registration/store.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    application,
    course,
    httpNotFound,
    registration,
  },
})
