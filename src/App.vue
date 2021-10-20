<template>
  <!-- APP BAR [BAR TOP] -->
  <v-app id="app">
    <Menu />
    <!-- MAIN CONTENT -->
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
    <!--- FOOTER-->
    <v-footer color="purple">
      <p class="white--text text-center">Copyright &copy; 2021 foot-stats.netlify.com all right reserved. All informations showing
        in this site are provided by the <a class="white--text" href="https://www.football-data.org">Football-Data.org
          API</a></p>
    </v-footer>
  </v-app>
</template>

<script>
import Menu from '@/components/Menu';

export default {
  components: {
    Menu,
  }
}
</script>

<style lang="scss">
  footer {
    width: 100%;
    p {
      margin-bottom: 0 !important;
      padding: 5px 0;
    }
  }
</style>
