import Vue from 'vue';
import Router from 'vue-router';
import userComponent from '@/app/user';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user',
      component: userComponent,
    },
  ],
});
