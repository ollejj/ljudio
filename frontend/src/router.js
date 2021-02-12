import { createRouter, createWebHistory } from "vue-router";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Home from './views/Home.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      if (true) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

// create router with default web history
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
