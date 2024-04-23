import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { UserLeague, UserLevel, type User } from "./types";

export const useUserStore = defineStore("user", () => {
  // constants
  const user = ref<User | null>({
    points: 0,
    tap: 1,
    energy: 1000,
    rechargingSpeed: 30000,
    turbo: 3,
    recharge: 3,
    id: Date.now().toString(),
    league: "bronze",
    level: "basic",
  });

  // computed
  const points = computed((): number => user.value?.points || 0);

  // methods
  const increasePoints = (): void => {
    if (!user.value) return;

    user.value.points += user.value.tap;
  };

  return {
    user,
    points,
    increasePoints,
  };
});
