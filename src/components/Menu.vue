<template>
  <div id="menu">
    <v-toolbar color="purple" dark max-height="64">
      <v-toolbar-title>Soccer League</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text class="d-none d-sm-flex">
          <router-link class="white--text" to="/">Home</router-link>
        </v-btn>
        <v-btn text class="d-none d-sm-flex">
          <router-link class="white--text" to="/live">Live</router-link>
        </v-btn>
        <v-btn text class="d-none d-sm-flex">
          <router-link class="white--text" to="/myteams">My Teams</router-link>
        </v-btn>
        <v-btn icon @click.stop="drawer = !drawer" class="d-flex d-sm-none">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data() {
      return {
        drawer: false,
      }
    }
  }
</script>
