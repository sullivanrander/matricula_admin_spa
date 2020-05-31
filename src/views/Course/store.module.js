import resource from '../../resource';

const state = {
  courses: null,
};

const getters = {
  getCourses(state) {
    return state.courses;
  },
};

const mutations = {
  SET_COURSES(state, data) {
    state.courses = data;
  },
};

const actions = {
  fetchCourses(context) {
    return resource.get(`/courses`)
      .then((response) => {
        context.commit('SET_COURSES', response.data);
        return Promise.resolve(response);
      }).catch((error) => {
        return Promise.reject(error);
      });
  },
  fetchCourse(context, data) {
    return resource.get(`/courses/${data.course_id}`)
      .then((response) => {
        return Promise.resolve(response);
      }).catch((error) => {
        return Promise.reject(error);
      });
  },
  searchCourses(context, data) {
    return resource.get(`/courses`, { params: { name: data.name } })
      .then((response) => {
        context.commit('SET_COURSES', response.data);
        return Promise.resolve(response);
      }).catch((error) => {
        return Promise.reject(error);
      });
  },
  toCoursesPage(context, data) {
    return resource.get(`/courses`, { params: { name: data.name, page: data.page } })
      .then((response) => {
        context.commit('SET_COURSES', response.data);
        return Promise.resolve(response);
      }).catch((error) => {
        return Promise.reject(error);
      });
  },
  createCourse(context, data) {
    return resource.post(`/courses`, data.course)
      .then((response) => {
        return Promise.resolve(response);
      }).catch((error) => {
        return Promise.reject(error);
      });
  },
  updateCourse(context, data) {
    return resource.put(`/courses/${data.course_id}`, data.course)
      .then((response) => {
        return Promise.resolve(response);
      }).catch((error) => {
        return Promise.reject(error);
      });
  },
  deleteCourse(context, data) {
    return resource.delete(`/courses/${data.course_id}`)
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