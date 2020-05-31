import PuRegistration from './index'
import PuRegistrationList from "../../components/Registration/ListRegistration";
import PuRegistrationCreate from "../../components/Registration/CreateRegistration";
import PuRegistrationUpdate from "../../components/Registration/UpdateRegistration";

export default [
  {
    path: '/registrations',
    component: PuRegistration,
    children: [
      {
        path: '/',
        component: PuRegistrationList,
        name: 'registrations',
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'create',
        component: PuRegistrationCreate,
        name: 'registrations_create',
        meta: {
          requiresAuth: true
        }
      },
      {
        path: ':id/update',
        component: PuRegistrationUpdate,
        name: 'registrations_update',
        meta: {
          requiresAuth: true
        }
      },
    ],
  },
];