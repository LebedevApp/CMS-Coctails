import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/Login"),
    meta: {
      layout: "empty-layout",
    },
  },
  {
    path: "/errors",
    name: "Errors",
    component: () => import("@/views/errors/error"),
    meta: {
      layout: "error-layout",
    },
  },
  {
    path: "/ingredients",
    name: "Ingredients",
    component: () => import("@/views/Ingredients/Ingredients"),
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: () => import("@/views/recipes/Recipes"),
  },
  {
    path: "/options",
    name: "Options",
    component: () => import("@/views/options/Options"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
