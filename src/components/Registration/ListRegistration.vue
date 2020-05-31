<template>
  <v-row dense v-if="registrations">
    <v-col cols="12" sm="12" md="12" lg="12">
      <v-text-field v-model="registrationsSearch" hide-details="auto" prepend-inner-icon="mdi-magnify"
                    label="Pesquisar" solo-inverted @keyup.native.enter="searchRegistrations()"/>
    </v-col>
    <v-col cols="12" sm="12" md="12" lg="12">
      <v-data-table
                  v-model="registrationsSelected"
                  :headers="registrationsHeaders"
                  :items="registrations.data"
                  :page.sync="registrations.meta.current_page"
                  :items-per-page.sync="registrations.meta.per_page"
                  hide-default-footer
                  disable-sort
                  :single-select="singleSelect"
                  :show-select="enableSelect">
        <template v-slot:item.student.born_date="{ item }">
          {{ dateFormat(item.student.born_date) }}
        </template>
        <template v-slot:item.registration_date="{ item }">
          {{ dateFormat(item.registration_date) }}
        </template>
        <template v-slot:item.course="{ item }">
          {{ item.course.name }}
        </template>
        <template v-slot:item.status="{ item }">
          {{ registrationStatus(item.status) }}
        </template>
        <template v-slot:item.action="{ item }" v-if="!hideOptions">
          <v-btn :to="{ name: 'registrations_update', params: { id: item.id } }" icon class="mr-0">
            <v-icon>mdi-file-document-edit-outline</v-icon>
          </v-btn>
          <v-btn @click="destroyRegistration(item)" icon class="mr-0">
            <v-icon>mdi-trash-can-outline</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-col>
    <v-col cols="12" sm="12" md="12" lg="12">
      <v-pagination v-model="page" :length="registrations.meta.last_page" :total-visible="7"></v-pagination>
    </v-col>
  </v-row>
</template>

<script>
  import moment from 'moment';
  moment.locale('pt-BR');

  export default {
    name: 'registration-list',
    props: {
      singleSelect: Boolean,
      enableSelect: Boolean,
      hideOptions: Boolean,
      selected: Array,
    },
    data: () => ({
      page: 1,
      registrationsSearch: '',
      registrationsHeaders: [
        { text: 'Id', value: 'id' },
        { text: 'Nome', value: 'student.name' },
        { text: 'CPF', value: 'student.cpf' },
        { text: 'Data de Nascimento', value: 'student.born_date' },
        { text: 'Email', value: 'student.email' },
        { text: 'Telefone', value: 'student.telephone' },
        { text: 'Data de Registro', value: 'registration_date' },
        { text: 'Curso', value: 'course' },
        { text: 'Status', value: 'status' },
        { text: 'Ação', align: 'center', width: 120, value: 'action' },
      ],
      registrationsSelected: [],
    }),
    created() {
      this.index();
    },
    watch: {
      page(value) {
        this.$store.dispatch('toRegistrationsPage', {
          name: this.registrationsSearch,
          page: value
        });
      },
      registrationsSelected(value) {
        this.$emit('input', value);
      },
    },
    methods: {
      index() {
        this.$store.dispatch('fetchRegistrations')
          .then(() => {
            if(this.selected) {
              this.registrationsSelected = this.selected;
            }
          });
      },
      searchRegistrations() {
        this.$store.dispatch('searchRegistrations', {
          name: this.registrationsSearch
        });
      },
      destroyRegistration(registration) {
        if (confirm('Tem certeza que deseja excluir esse item?')) {
          this.$store.dispatch('deleteRegistration', {
            registration_id: registration.id
          }).then(() => {
            this.$store.dispatch('fetchRegistrations');
          });
        }
      },
      registrationStatus(status) {
        switch (status) {
          case 'ACTIVE':
            return 'Ativa';
          case 'SUSPENDED':
            return 'Bloqueada';
          case 'TERMINATED':
            return 'Cancelada';
          case 'DROPOUT':
            return 'Desistente';
          case 'COMPLETED':
            return 'Finalizada';
          case 'PAUSED':
            return 'Trancada';
          default:
            return 'Indefinido';
        }
      },
      dateFormat(date) {
        return moment(date).format('LL');
      },
    },
    computed: {
      registrations() {
        return this.$store.getters.getRegistrations;
      },
    },
  };
</script>
