<template>
  <div class="live">
    <v-container grid-list-xl>
      <v-layout row justify-center>
        <v-flex xs12 sm6 md4>
          <v-card id="live-match" class="text-center" v-on:click="$store.commit()">
            <h2>Competition Name</h2>
            <p>
              <span class="score-text">Home Team Name</span>
              <span class="score-number">Home Team Score</span>
              x
              <span class="score-number">Away Team Score</span>
              <span class="score-text">Away Team Name</span>
            </p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'live',
  mounted() {

  }
}
</script>