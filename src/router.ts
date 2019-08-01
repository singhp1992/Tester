import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('./views/Landing.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/categories',
      name: 'categories',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Categories.vue'),
    },
    {
      path: '/random',
      name: 'random',
      component: () => import('./views/Random.vue'),
    },
  ],
});
