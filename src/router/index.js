import Vue from 'vue';
import Router from 'vue-router';
import sideComponent from '@/components/side';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: sideComponent,
    },
  ],
});
