import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { type User } from "./types";

export const useUserStore = defineStore("user", () => {
  // constants
  const user = ref<User | null>(null);

  // computed
  const points = computed((): number => user.value?.points || 0);
  return {
    user,
    points
  };
});
