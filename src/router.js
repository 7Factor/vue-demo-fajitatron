import Vue from 'vue'
import Router from 'vue-router'
import Maker from './views/maker.vue'
import Meats from './views/meats.vue'
import Veggies from './views/veggies.vue'
import Toppings from './views/toppings.vue'
import Complitas from './views/complitas.vue'
import Complita from './views/complita.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'fajita-maker',
      component: Maker
    },
    {
      path: '/meats',
      name: 'meats',
      component: Meats
    },
    {
      path: '/veggies',
      name: 'veggies',
      component: Veggies
    },
    {
      path: '/toppings',
      name: 'toppings',
      component: Toppings
    },
    {
      path: '/complitas',
      name: 'complitas',
      component: Complitas
    },
    {
      path: '/complitas/:id',
      name: 'complita',
      component: Complita,
      props: true
    }
  ]
})
