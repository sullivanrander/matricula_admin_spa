<template>
  <v-row align-content="center" justify="center" class="fill-height">
    <v-col class="text-xs-center" cols="12" sm="8" md="6">
      <h6 class="title font-weight-light pt-2">Página não Encontrada</h6>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'http-not-found',
  data: () => ({}),
  created() {
    const scope = this;
    scope.index();
  },
  watch: {},
  methods: {
    index() {},
  },
  computed: {},
};
</script>
