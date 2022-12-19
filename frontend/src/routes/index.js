// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomePage"),
  },
  {
    path: "/movie",
    name: "index",
    component: () => import("@/components/MovieIndexPage"),
  },
  {
    path: "/movie:id",
    name: "show",
    component: () => import("@/views/MovieShowPage"),
  },
  {
    path: "/db",
    name: "db",
    component: () => import("@/views/DbConnectPage"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/components/NotFound"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
