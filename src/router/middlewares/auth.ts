import { Routes } from "@/router";
import { useAuthStore } from "@/stores/auth";
import type { NavigationGuardWithThis } from "vue-router";

/**
 * Controle de autenticação para navegação
 */
export const authMiddleware: NavigationGuardWithThis<undefined> = (
  to,
  _from,
  next
) => {
  const authStore = useAuthStore();
  if (!authStore.isAuthenticated && to.name !== Routes.LOGIN) {
    return next({
      name: Routes.LOGIN,
    });
  }
  return next();
};
