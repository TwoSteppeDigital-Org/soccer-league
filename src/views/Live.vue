<template>
  <div class="live">
    <v-container grid-list-xl>
      <v-layout row justify-center>
        <v-flex xs12 sm6 md4 v-for="item in todaysMatches" :key="item.id">
          <v-card id="live-match" class="text-center" v-on:click="$store.commit('SET_CURRENT_COMPETITION', competitionItem.code)">
            <v-row no-gutters>
              <v-col cols="12" sm="8"><h2 class="club-title">{{item.competition.name}}</h2></v-col>
              <v-col cols="12" sm="4"><v-img class="flag" :src="item.competition.area.ensignUrl" /></v-col>
              <v-col cols="12" sm="6">
                <h4 class="score-text">{{item.homeTeam.name}}</h4>
              </v-col>
              <v-col cols="12" sm="6">
                <h4 class="score-text">{{item.awayTeam.name}}</h4>
              </v-col>
              <v-col cols="12" sm="6">
                <h4 class="score-text">{{item.score.fullTime.homeTeam}}</h4>
              </v-col>
              <v-col cols="12" sm="6">
                <h4 class="score-text">{{item.score.fullTime.awayTeam}}</h4>
              </v-col>
            </v-row>
            <h4 v-html="toUserDate(item.utcDate)"></h4>
            <h4 class="status">
              <p v-bind:class="matchStatus(item.status)">{{item.status}}</p>
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
  mounted() {
    this.$store.dispatch('loadTodaysMatches');
  },
  computed: {
    ...mapState([
      'todaysMatches',
    ])
  },
  methods: {
    toUserDate(utc) {
      const d = new Date(utc);
      return d.toLocaleString();
    },
    filterTeamName: function (raw) {
      //Regex to remove number and all two words in uppercase
      let filteredName = raw.replace(/[0-9]/g, '').replace(/\w*[A-Z]\w*[A-Z]\w*/g, '');
      raw = filteredName;
      return raw;
    },
    matchStatus: function(status) {
      switch (status) {
        case 'IN_PLAY':
          return 'live';
        case 'PAUSED':
          return 'live';
        case 'SCHEDULED':
          return 'scheduled';
        case 'FINISHED':
          return 'finished';
        default:
          return 'none';
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  @keyframes fade {
    from { opacity: 1;}
    to {opacity: 0;}
  }

  @mixin statusColor($color) {
    content: "";
    width: 10px;
    height: 10px;
    background-color: $color;
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    margin: auto 10px auto 0;
  }

  .club-title {
    margin-top: 20px;
  }

  .flag {
    width: 100px;
    margin-left: auto;
    margin-right: auto;
  }

  #live-match {
    .score {
      &-text {
        text-transform: capitalize;
        vertical-align: middle;
      }

      &-number {
        font-weight: bold;
      }
    }

    .status {
      .finished {
        &:before {
          @include statusColor(red);
        }
      }
      .live {
        &:before {
          @include statusColor(green);
          animation: fade 1s cubic-bezier(.5, 0, 1, 1) infinite alternate;
        }
      }
      .scheduled {
        &:before {
          @include statusColor(orange);
        }
      }
    }
  }
</style>
