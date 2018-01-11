import Vue from 'vue';
import Router from 'vue-router';
import userComponent from '@/app/user';
import bikeNews from '@/app/bikeNews';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user',
      component: userComponent,
    },
    {
      path: '/bikeNews',
      name: 'bikeNews',
      component: bikeNews,
    },
  ],
});
