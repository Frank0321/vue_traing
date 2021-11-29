import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lesson2 from "../views/Lesson2";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/lesson2',
    name: 'lesson2',
    component: Lesson2
  },
  {
    path: '/lesson4',
    name: 'lesson4',
    component: () => import('../views/Lesson4')
  },
  {
    path: '/lesson5',
    name: 'lesson5',
    component: ()=> import('../views/Lesson5')
  },
  {
    path: '/lesson6',
    name: '/lesson6',
    component: ()=> import('../views/Lesson6')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
