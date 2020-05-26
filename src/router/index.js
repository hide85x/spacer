import Router from 'vue-router';
import Vue from 'vue';
import Search from '../views/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    }
  ],
});
