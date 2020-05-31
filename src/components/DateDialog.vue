<template>
  <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="302px">
    <template v-slot:activator="{ on }">
      <v-text-field flat v-model="dateFormatted" readonly v-on="on" v-bind="$attrs"/>
    </template>
    <v-date-picker light v-if="modal" v-model="date" full-width>
      <v-spacer/>
      <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
  import moment from 'moment';
  moment.locale('pt-BR');

  export default {
    inheritAttrs: false,
    name: 'date-dialog',
    props: {
      value: String,
    },
    data: () => ({
      date: null,
      modal: false,
    }),
    created() {
      this.index();
    },
    watch: {
      date: {
        handler: function (value) {
          this.$emit('input', value);
        },
        immediate: true
      },
    },
    methods: {
      index() {
        if (this.value) {
          this.date = this.value;
        }
      },
    },
    computed: {
      dateFormatted() {
        if(this.date){
          return moment(this.date).format('LL');
        }else{
          return '';
        }
      },
    }
  }
</script>
