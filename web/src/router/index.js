import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/HomePage.vue"),
  },
  {
    path: "/mode",
    name: "Mode",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/ModePage.vue"),
  },
  {
    path: "/mode/mbti",
    name: "MbtiMode",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/MbtiModePage.vue"),
  },
  {
    path: "/mode/custom",
    name: "CustomMode",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/CustomModePage.vue"),
  },
  {
    path: "/mode/real",
    name: "RealMode",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/RealModePage.vue"),
  },
  {
    path: "/type",
    name: "Type",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/PersonalityTypePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
