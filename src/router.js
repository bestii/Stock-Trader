import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/';
import Portfolio from './views/Portfolio/';
import Stocks from './views/Stocks/';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfoio',
      component: Portfolio
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: Stocks
    }
  ]
})
