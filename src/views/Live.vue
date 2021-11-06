<template>
  <div class="live">
    <v-container grid-list-xl>
      <v-layout row justify-center>
        <v-flex xs12 sm6 md4 v-for="item in todaysMatches" :key="item.id">
          <v-card id="live-match" class="text-center" v-on:click="$store.commit('SET_CURRENT_COMPETITION', competitionItem.code)">
            <h2>Competition Name</h2>
            <p>
              <span class="score-text">Home_Team_Name</span>
              <span class="score-number">Home_Team_Score</span>
              x
              <span class="score-number">Away_Team_Score</span>
              <span class="score-text">Away_Team_Name</span>
            </p>
            <h4>Date</h4>
            <h4 class="status">
              <p>Status</p>
            </h4>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'live',
  computed: {
    ...mapState([
      'todaysMatches',
    ])
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
  @keyframes fade {
    from { opacity: 1;}
    to {opacity: 0;}
  }

  #live-match {
    .score {
      &-text {
        text-transform: uppercase;
      }

      &-number {
        font-weight: bold;
      }
    }

    .status {

    }
  }
</style>