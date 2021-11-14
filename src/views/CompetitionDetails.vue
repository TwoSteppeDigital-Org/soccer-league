<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    name: 'competitionDetails',
    mounted() {
      this.$store.dispatch('loadSelectedCompetition', this.currentCompetition.code);
    },
    computed: {
      ...mapState([
        'currentCompetition',
      ])
    },
  }
</script>