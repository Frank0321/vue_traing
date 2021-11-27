import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import lessonTwo from "../views/LessonTwo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/lessonOne",
    name: "lessonOne",
    component: () => import("../views/LessonOne"),
  },
  {
    path: "/lessonTwo",
    name: "lessonTwo",
    component: lessonTwo,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
