<template>
  <div class="myTeams">
    <div class="step">
      <h1>Which team do you want?</h1>
      <v-flex d-flex>
        <v-layout wrap>
          <v-select :items="competitionList" item-value="id" item-text="name" v-model="selectedLeagueId" label="Select a League">
          </v-select>
        </v-layout>
      </v-flex>
    </div>

    <div class="step" v-if="league">
      <v-card class="mx-auto" max-width="700">
        <v-card-title>{{league.competition.name}} ({{league.competition.area.name}})</v-card-title>
        <v-card-text>{{league.season.startDate}} - {{league.season.endDate}}</v-card-text>
        <v-simple-table id="league-table" fixed-header>
          <thead>
            <tr>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-auto header stats-num">P</span>
                  </template>
                  <span>Postiion</span>
                </v-tooltip>
              </td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-auto header ">C</span>
                  </template>        
                  <span>Club Name</span>
                </v-tooltip>
              </td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-auto header stats-num">P</span>
                  </template>        
                  <span>Points</span>
                </v-tooltip>
              </td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-auto header stats-num">M</span>
                  </template>        
                  <span>Matches</span>
                </v-tooltip>
              </td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-auto header stats-num">W</span>
                  </template>        
                  <span>Wins</span>
                </v-tooltip>
              </td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-auto header stats-num">D</span>
                  </template>        
                  <span>Draws</span>
                </v-tooltip>
              </td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-autoheader stats-num">L</span>
                  </template>        
                  <span>Loss</span>
                </v-tooltip>
              </td>
            </tr>
          </thead>
        </v-simple-table>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
  export default {
    name: 'MyTeams',
    data() {
      return {
        selectedLeagueId: '',
        league: false,
        step: 0,
      }
    },
    mounted() {
      this.$store.dispatch('loadCompetitionList');
    },
    watch: {
      selectedLeagueId: function() {
        this.fetchLeagueData(this.selectedLeagueId);
      }
    },
    methods: {
      fetchLeagueData(id) {
        axios({
          headers: {
            'X-Auth-Token': 'e9c6e436a05442488ce54e147180c5c7'
          },
          method: 'get',
          url: `https://api.football-data.org/v2/competitions/${id}/standings`,
        })
        .then(response => {
          this.league = response.data
          // eslint-disable-next-line
          console.log(this.league, '----------')
        })
        .catch(response => (this.league = response))
      }
    },
    computed: {
      ...mapState([
        'competitionList',
      ]),
    }
  }
</script>

<style lang="scss" scoped>
#league-table {
  td {
    text-transform: uppercase;
    text-align: center;
  }

  .header {
    font-weight: 700;
  }
}
</style>