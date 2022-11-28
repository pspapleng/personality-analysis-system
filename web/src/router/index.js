import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/HomePage.vue"),
  },
  {
    path: "/menu",
    name: "Menu",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/MenuPage.vue"),
  },
  {
    path: "/form",
    name: "Form",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/FormPage.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/NotFoundPage.vue"),
  },
  {
    path: "/result",
    name: "Result",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/ResultPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
