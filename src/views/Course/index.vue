<template>
  <v-row dense align-content="start" class="fill-height">
    <v-col cols="12" sm="12" md="12" lg="12">
      <v-sheet dark color="primary" class="pa-3">
        <v-row dense no-gutters>
          <v-col class="grow">
            <h4 v-if="$route.name === 'courses'" class="title font-weight-light mb-2">Curso</h4>
            <h4 v-if="$route.name === 'courses_create'" class="title font-weight-light mb-2">Criar Curso</h4>
            <h4 v-if="$route.name === 'courses_update'" class="title font-weight-light mb-2">Alterar Curso</h4>
            <p class="font-weight-thin mb-0">Listagem dos dados</p>
          </v-col>
          <v-col class="shrink">
            <v-btn @click="$router.push({ name: 'courses_create' })" icon v-if="$route.name === 'courses'">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn @click="$router.back()" icon v-else>
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
    <v-col cols="12" sm="12" md="12" lg="12">
      <router-view/>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'course',
    data: () => ({}),
  };
</script>
