<template>
  <div id="home">
    <Card v-bind:data="competitionList" v-if="competitionList" />
  </div>
</template>

<script>
  import Card from '@/components/Card';
  import { mapState } from 'vuex';
  export default {
    name: 'home',
    components: {
      Card,
    },
    mounted() {
      this.$store.dispatch('loadCompetitionList');
    },
    computed: {
      ...mapState([
        'competitionList',
      ])
    },
  }
</script>
