import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "dashboard",
    component: () =>
      import("../views/Dashboard.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
