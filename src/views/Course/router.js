import PuCourse from './index'
import PuCourseList from "../../components/Course/ListCourse";
import PuCourseCreate from "../../components/Course/CreateCourse";
import PuCourseUpdate from "../../components/Course/UpdateCourse";

export default [
  {
    path: '/courses',
    component: PuCourse,
    children: [
      {
        path: '/',
        component: PuCourseList,
        name: 'courses',
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'create',
        component: PuCourseCreate,
        name: 'courses_create',
        meta: {
          requiresAuth: true
        }
      },
      {
        path: ':id/update',
        component: PuCourseUpdate,
        name: 'courses_update',
        meta: {
          requiresAuth: true
        }
      },
    ],
  },
];