<template>
  <v-app>
    <!--Navigation-->
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar tile>
            <v-img :src="require('./assets/profile.png')"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Administrador</v-list-item-title>
            <v-list-item-subtitle>admin@admin.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider/>

      <!--v-if="business.pivot_role === 'OWNER'"-->
      <v-list nav dense>
        <v-list-item :to="{ name: 'registrations' }">
          <v-list-item-icon>
            <v-icon>mdi-notebook-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Matrículas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ name: 'courses' }">
          <v-list-item-icon>
            <v-icon>mdi-pen</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Cursos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--App Bar-->
    <v-app-bar dark app fixed clipped-left color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title class="headline text-uppercase">
        <router-link :to="{ name: 'registrations' }">
          <span class="white--text">MATRÍCULAS</span>
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <!--Content-->
    <v-content>
      <v-container fluid class="fill-height">
        <router-view/>
      </v-container>
    </v-content>

    <!--Loading Dialog-->
    <v-dialog v-model="loadingDialog" hide-overlay persistent width="65">
      <v-card>
        <v-img :src="require('./assets/loading.svg')" contain/>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      drawer: {
        get: function() {
          return this.$store.getters.getDrawerStatus;
        },
        set: function(status) {
          this.$store.dispatch('setDrawerStatus', status);
        },
      },
      loadingDialog: {
        get: function() {
          return this.$store.getters.getLoadingDialog;
        },
        set: function(status) {
          this.$store.dispatch('setLoadingDialogStatus', status);
        },
      }
    },
  }
</script>

<style>
  a{
    text-decoration: none;
  }

  /*Dialogs*/
  .v-dialog {
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
  }

  /*Container*/
  .container.fill-height > .row {
    max-width: initial !important;
    width: 100% !important;
  }
</style>
