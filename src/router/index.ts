import { createRouter, createWebHistory } from "vue-router";

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
      meta: {
        title: "Início",
      },
    },
  ],
});

router.beforeEach((to) => {
  if (to?.meta?.title) {
    document.title = `${to.meta.title} - NT Hotéis`;
  }
});

export default router;
