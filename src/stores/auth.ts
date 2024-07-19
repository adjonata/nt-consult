import type { User } from "@/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

/**
 * Simples controle de autenticação, apenas com store runtime
 */
export const useAuthStore = defineStore("auth", () => {
  const user = ref<User>();
  const isAuthenticated = computed(() => !!user.value);

  return {
    user,
    isAuthenticated,
  };
});
