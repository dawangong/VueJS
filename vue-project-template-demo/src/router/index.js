import Vue from 'vue';
import Router from 'vue-router';
import main from '@/components/main';
import one from '@/components/one';
import two from '@/components/two';
import three from '@/components/three';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/one',
      name: 'one',
      component: one
    },
    {
      path: '/two',
      name: 'two',
      component: two
    },
    {
      path: '/three',
      name: 'three',
      component: three
    }
  ]
});
