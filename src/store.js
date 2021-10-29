import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    competitionList: null,
    currentCompetition: null,
  },

  actions: {
    loadCompetitionList: function() {
      axios({
        headers: {
          'X-Auth-Token': 'e9c6e436a05442488ce54e147180c5c7'
        },
        method: 'get',
        url: 'https://api.football-data.org/v2/competitions',
      })
      .then(response => (this.competitionList = response.data.competitions.filter((item) => {
        return item.plan == 'TIER_ONE'
        // return item;
      })))
      .then(competitionList => {
        this.commit('SET_COMPETITION_LIST', competitionList);
      })
      .catch(response => (this.competitionList = response))
    },
    setCurrentCompetition: payload => {
      this.commit('SET_COMPETITION_LIST', payload);
    },
    loadSelectedCompetition: code => {
      axios({
          headers: {
            'X-Auth-Token': 'e9c6e436a05442488ce54e147180c5c7'
          },
          method: 'get',
          url: `https://api.football-data.org/v2/competitions/${code}/standings`,
        })
        .then(response => this.competitionCode = response.data)
        .catch(response => (this.competitionCode = response.data))
    },
  },
  mutations: {
    SET_COMPETITION_LIST(state, data) {
      state.competitionList = data;
    },
    SET_CURRENT_COMPETITION(state, data) {
      state.currentCompetition = data;
    }
  },
  getters: {
    currentCompetition: state => state.currentCompetition
  }
})