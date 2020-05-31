<template>
  <v-row dense v-if="registration">
    <v-col cols="12" sm="12" md="12" lg="12">
      <v-form ref="form" v-model="valid">
        <v-row dense>
          <v-col cols="12" sm="12" md="12">
            <h1 class="subtitle-1 font-weight-light text-uppercase">Dados do aluno</h1>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-text-field flat solo-inverted hide-details="auto" v-model="registration.student.name" label="Nome*"
                          :rules="[$rules.required]"/>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-text-field flat solo-inverted hide-details="auto" v-model="registration.student.cpf" label="CPF*"
                          :rules="[$rules.required, $rules.cpf]" type="number"/>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <date-dialog flat solo-inverted hide-details="auto" v-model="registration.student.born_date" label="Data de nascimento*"
                          :rules="[$rules.required]"/>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field flat solo-inverted hide-details="auto" v-model="registration.student.email" label="Email*"
                          :rules="[$rules.required, $rules.email]"/>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field flat solo-inverted hide-details="auto" v-model="registration.student.telephone" label="Telefone*"
                          :rules="[$rules.required, $rules.telephone]" type="number"/>
          </v-col>

          <v-col cols="12" sm="12" md="12" class="pt-5">
            <h1 class="subtitle-1 font-weight-light text-uppercase">Dados da matrícula</h1>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <date-dialog flat solo-inverted hide-details="auto" v-model="registration.registration_date" label="Data do registro*"
                         :rules="[$rules.required]"/>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-select flat solo-inverted hide-details="auto" v-model="registration.status" :items="courseStatus"
                      label="Status*" :rules="[$rules.required]" persistent-hint hint="Status*"/>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <course-list v-model="coursesSelected" enable-select single-select/>
          </v-col>


          <v-col cols="12" sm="12" md="12" class="text-right pt-5">
            <v-btn text class="mr-1" @click="$refs.form.reset()">Limpar</v-btn>
            <v-btn color="primary" @click="storeRegistration()">Salvar</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
  import DateDialog from "../DateDialog";
  import CourseList from "../Course/ListCourse";
  export default {
    name: 'registration-create',
    components: {CourseList, DateDialog},
    data: () => ({
      coursesSelected: [],
      registration: {
        registration_date: '',
        status: 'ACTIVE',
        course: '',
        student : {
          name: '',
          cpf: '',
          born_date: '',
          email: '',
          telephone: '',
        }
      },
      courseStatus: [
        { text: 'Ativa', value: 'ACTIVE' },
        { text: 'Bloqueada', value: 'SUSPENDED' },
        { text: 'Cancelada', value: 'TERMINATED' },
        { text: 'Desistente', value: 'DROPOUT' },
        { text: 'COMPLETED', value: 'Finalizada' },
        { text: 'Trancada', value: 'PAUSED' },
      ],
      valid: true,
    }),
    created() {
      this.index();
    },
    watch: {
      coursesSelected(value){
        this.registration.course = value.length ? value[0].id : '';
      }
    },
    methods: {
      index() {},
      storeRegistration() {
        if (!this.$refs.form.validate()) {
          alert('Verifique os campos do formulário!');
          return;
        }
        this.$store.dispatch('createRegistration', {
          registration: this.registration
        }).then(() => {
          this.$refs.form.reset();
          this.$router.back();
        });
      },
    },
    computed: {},
  };
</script>
