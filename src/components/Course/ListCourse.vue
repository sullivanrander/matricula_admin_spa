<template>
  <v-row dense v-if="courses">
    <v-col cols="12" sm="12" md="12" lg="12">
      <v-text-field v-model="coursesSearch" hide-details="auto" prepend-inner-icon="mdi-magnify"
                    label="Pesquisar" solo-inverted @keyup.native.enter="searchCourses()"/>
    </v-col>
    <v-col cols="12" sm="12" md="12" lg="12">
      <v-data-table
                  v-model="coursesSelected"
                  :headers="coursesHeaders"
                  :items="courses.data"
                  :page.sync="courses.meta.current_page"
                  :items-per-page.sync="courses.meta.per_page"
                  hide-default-footer
                  disable-sort
                  :single-select="singleSelect"
                  :show-select="enableSelect">
        <template v-slot:item.action="{ item }" v-if="!hideOptions">
          <v-btn :to="{ name: 'courses_update', params: { id: item.id } }" icon class="mr-0">
            <v-icon>mdi-file-document-edit-outline</v-icon>
          </v-btn>
          <v-btn @click="destroyCourse(item)" icon class="mr-0">
            <v-icon>mdi-trash-can-outline</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-col>
    <v-col cols="12" sm="12" md="12" lg="12">
      <v-pagination v-model="page" :length="courses.meta.last_page" :total-visible="7"></v-pagination>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'course-list',
    props: {
      singleSelect: Boolean,
      enableSelect: Boolean,
      hideOptions: Boolean,
      selected: Array,
    },
    data: () => ({
      page: 1,
      coursesSearch: '',
      coursesHeaders: [
        { text: 'Id', value: 'id' },
        { text: 'Nome', value: 'name' },
        { text: 'Alunos Matriculados', value: 'users_registered' },
        { text: 'Ação', align: 'center', width: 120, value: 'action' },
      ],
      coursesSelected: [],
    }),
    created() {
      this.index();
    },
    watch: {
      page(value) {
        this.$store.dispatch('toCoursesPage', {
          name: this.coursesSearch,
          page: value
        });
      },
      coursesSelected(value) {
        this.$emit('input', value);
      },
    },
    methods: {
      index() {
        this.$store.dispatch('fetchCourses')
          .then(() => {
            if(this.selected) {
              this.coursesSelected = this.selected;
            }
          });
      },
      searchCourses() {
        this.$store.dispatch('searchCourses', {
          name: this.coursesSearch
        });
      },
      destroyCourse(course) {
        if (confirm('Tem certeza que deseja excluir esse item?')) {
          this.$store.dispatch('deleteCourse', {
            course_id: course.id
          }).then(() => {
            this.$store.dispatch('fetchCourses');
          });
        }
      },
    },
    computed: {
      courses() {
        return this.$store.getters.getCourses;
      },
    },
  };
</script>
