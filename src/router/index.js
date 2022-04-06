import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue'),
  },
  {
    path: '/accueil',
    name: 'PageAccueil',
    component: () => import('../views/PageAccueil.vue'),
  },
  {
    path: '/pagecontact',
    name: 'PageContact',
    component: () => import('../views/PageContact.vue'),
  },
  {
    path: '/informations',
    name: 'PageInformations',
    component: () => import('../views/PageInformations.vue'),
  },
  {
    path: '/contact',
    name: 'PageContact',
    component: () => import('../views/PageContact.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
