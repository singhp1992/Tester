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
      path: '/welcome',
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
      component: () => import('./views/Categories.vue'),
    },
    {
      path: '/random',
      name: 'random',
      component: () => import('./views/Random.vue'),
    },
    {
      path: '/github',
      beforeEnter() { location.href = 'https://github.com/singhp1992' }
    }
  ],
});
