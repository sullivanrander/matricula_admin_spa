<template>
  <v-row dense v-if="course">
    <v-col cols="12" sm="12" md="12" lg="12">
      <v-form ref="form" v-model="valid">
        <v-row dense>
          <v-col cols="12" sm="12" md="12">
            <v-text-field flat solo-inverted hide-details="auto" v-model="course.name" label="Nome*" :rules="[$rules.required]"/>
          </v-col>

          <v-col cols="12" sm="12" md="12" class="text-right pt-5">
            <v-btn text class="mr-1" @click="$refs.form.reset()">Limpar</v-btn>
            <v-btn color="primary" @click="updateCourse()">Alterar</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'course-update',
    data: () => ({
      course: null,
      valid: true,
    }),
    created() {
      this.index();
    },
    methods: {
      index() {
        this.$store.dispatch('fetchCourse', {
          course_id: this.$route.params.id
        }).then((response) => {
          this.course = response.data.data;
        });
      },
      updateCourse() {
        if (!this.$refs.form.validate()) {
          alert('Verifique os campos do formulário!');
          return;
        }
        this.$store.dispatch('updateCourse', {
          course_id: this.$route.params.id,
          course: this.course
        }).then(() => {
          this.$refs.form.reset();
          this.$router.back();
        });
      },
    },
    computed: {},
  };
</script>
