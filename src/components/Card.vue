<template>
  <v-container grid-list-xl>
    <v-layout row wrap justify-space-between>
      <v-flex class xs12 sm6 md4 v-for="competitionItem in data" :key="competitionItem.id">
        <v-card v-on:click="$store.commit('SET_COMPETITION_LIST', competitionItem.code)">
          <v-card-title>{{competitionItem.name}}</v-card-title>
          <v-card-text>{{competitionItem.area.name}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Card',
  props: ['data'],
  methods: {
    updateCurrentLeague(code) {
      this.$store.dispatch('setCurrentCompetition', code);
    },
  },
}
</script>

<style lang="scss" scoped>

</style>