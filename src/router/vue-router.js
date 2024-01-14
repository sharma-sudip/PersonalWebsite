import HomePage from "../views/HomePage.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [{ path: "/", component: HomePage }];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
