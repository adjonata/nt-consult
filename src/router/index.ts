import { createRouter, createWebHistory } from "vue-router";
import { authMiddleware } from "./middlewares/auth";

export enum Routes {
  HOME = "home",
  LOGIN = "login",
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: Routes.HOME,
      component: () => import("../views/home.vue"),
    },
    {
      path: "/entrar",
      name: Routes.LOGIN,
      component: () => import("../views/login.vue"),
    },
  ],
});

// Middleware de autenticação
router.beforeEach(authMiddleware);

export default router;
