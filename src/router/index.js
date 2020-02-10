import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Works from '../components/Works.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'about' }
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '/works',
    name: 'works',
    component: Works
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
