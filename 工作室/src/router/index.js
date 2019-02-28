import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/components/home/home'], resolve); //发布

Vue.use(Router)

export default new Router({
  // mode:'history',
  mode:'hash',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    { path: '/home',
      component: Home,
      name: 'home',
    },
  ]
})
