import HomePage from "../views/HomePage.vue";
import { createWebHistory, createRouter } from "vue-router";
import Resume from "../views/Resume.vue";

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/resume",
    component: Resume,
    name: "Resume",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
