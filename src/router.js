import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bill',
      name: 'bill',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Bill.vue')
    },
    {
      path: '/quotation',
      name: 'quotation',
      component: () => import( /* webpackChunkName: "about" */ './views/Quotation.vue')
    },
    {
      path: '/dc',
      name: 'dc',
      component: () => import( /* webpackChunkName: "about" */ './views/DC.vue')
    }
  ]
})