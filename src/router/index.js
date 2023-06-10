import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import restaurant from '../views/restaurant.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/restaurant/:slug',
    name: 'restaurant',
    component: restaurant
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
