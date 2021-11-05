<template>
  <v-container grid-list-xl>
    <v-layout row wrap justify-space-between>
      <v-flex class xs12 sm6 md4 v-for="competitionItem in data" :key="competitionItem.id">
        <v-card v-on:click="$store.commit('SET_COMPETITION_LIST', competitionItem.code)">
          <v-row no-gutters>
            <v-col cols="12" sm="8">
              <v-card-title>{{competitionItem.name}}</v-card-title>
              <v-card-text>{{competitionItem.area.name}}</v-card-text>
            </v-col>
            <v-col cols="12" sm="4">
              <v-img class="flag" :aspect-ratio="16/9" :src="competitionItem.area.ensignUrl"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Card',
  props: ['data'],
  data: () => ({
    // width: 100,
  }),
  methods: {
    updateCurrentLeague(code) {
      this.$store.dispatch('setCurrentCompetition', code);
    },
  },
}
</script>

<style lang="scss" scoped>
  .flag {
    width: 100%;
  }
</style>