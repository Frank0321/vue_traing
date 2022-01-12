import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lesson2 from "../views/Lesson2";
import Lesson7 from "../views/Lesson7";
import Lesson8 from "../views/Lesson8";
import lesson9 from "../views/lesson9";
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
  },
  {
    path: '/lesson7',
    name: '/lesson7',
    component: Lesson7
  },
  {
    path: '/lesson8',
    name: '/lesson8',
    component: Lesson8
  },
  {
    path: '/lesson9',
    name: '/lesson9',
    component: lesson9
  },
  {
    path: '/lesson10',
    name: '/lesson10',
    component:()=> import('../views/lesson10')
  },
  {
    path: '/lesson14',
    name: '/lesson14',
    component: () => import('../views/lesson14')
  },
  {
    path: '/lesson15',
    name: '/lesson15',
    component: () => import('../views/lesson15')
  },
  {
    path: '/lesson18',
    name: '/lesson18',
    component: () => import('../views/lesson18')
  },
  {
    path: '/lesson21',
    name: '/lesson21',
    component: () => import('../views/lesson21')
  },
  {
    path: '/movie',
    name: '/movieUrl',
    component: () => import('../components/movie')
  },
  {
    path: '/music',
    name: 'musicUrl',
    component: () => import('../components/music')
  },
  {
    path: '/lesson22',
    name: '/lesson22',
    component: () => import('../views/lesson22')
  },
  {
    path: '/detail',
    name: 'detail-query',
    component: () => import('../components/detail')
  },
  {
    path: '/detail/:id',
    name: 'detail-params',
    component: () => import('../components/detail')
  },
  {
    path: '/interviewTest',
    name: 'interview',
    component: () => import('../views/interviewTest')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
