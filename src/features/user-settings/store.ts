import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { type User } from "./types";

export const useUserStore = defineStore("user", () => {
  // constants
  const user = ref<User | null>({
    points: 0,
    tap: 1,
    energy: 1000,
    currentEnergy: 1000,
    rechargingSpeed: 1800000,
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
    if (
      user.value.currentEnergy === 0 ||
      user.value.currentEnergy < user.value.tap
    )
      return;

    user.value.points += user.value.tap;
  };

  const decreaseEnergy = (): void => {
    if (!user.value) return;
    if (user.value.currentEnergy - user.value.tap < 0) {
      user.value.currentEnergy = 0;
      return;
    }

    user.value.currentEnergy -= user.value.tap;
  };

  const restoreEnergy = (): void => {
    if (!user.value) return;
    if (user.value.currentEnergy === user.value.energy) return;

    const interval =
      user.value.rechargingSpeed / (user.value.energy / user.value.recharge);
    // setInterval(() => {
    //   if (!user.value) {
    //     return;
    //   }

    //   if (user.value.currentEnergy + user.value.recharge > user.value.energy) {
    //     user.value.currentEnergy = user.value.energy;

    //     return;
    //   }

    //   user.value.currentEnergy += user.value.recharge;
    // }, interval);
  };

  return {
    user,
    points,
    increasePoints,
    decreaseEnergy,
    restoreEnergy,
  };
});
