import { createRouter, createWebHistory } from "vue-router";
import Register from "./components/Register.vue";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

// create router with default web history
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
