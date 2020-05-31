import Vue from 'vue'
import Router from 'vue-router'

import application from "../views/Application/router";
import course from "../views/Course/router";
import httpNotFound from "../views/HttpNotFound/router";
import registration from "../views/Registration/router";

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'registrations' }
    },
    ...application,
    ...course,
    ...httpNotFound,
    ...registration,
    {
      path: '*',
      name: 'not-found',
      redirect: { name: 'http_not_found' },
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
