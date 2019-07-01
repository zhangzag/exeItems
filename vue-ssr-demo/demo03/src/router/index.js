import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function createRouter() {
  const routes = [
    {
      path: '/',
      // component: () => import('../components/Home.vue')
      component: require('../components/Home.vue') 
    },
    {
      path: '/list',
      component: () => import('../components/List.vue')
      // component: require('../components/List.vue')
    }
  ];

  const router = new Router({
    mode: 'history',
    routes
  });

  return router;
}

export default createRouter;