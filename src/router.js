import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/live',
      name: 'live',
      component: () => import('./views/Live.vue')
    },
    {
      path: '/myteams',
      name: 'myteams',
      component: () => import('./views/MyTeams.vue')
    },
    {
      path: '/competition/:competitionName',
      name: 'competitionDetails',
      component: () => import('./views/CompetitionDetails.vue')
    },
  ]
})
