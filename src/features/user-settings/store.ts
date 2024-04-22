import { defineStore } from "pinia";
import { ref } from "vue";

import { type UserSettings } from "./types";

export const useUserSettingsStore = defineStore("user-settings", () => {
  const user = ref<UserSettings | null>(null);

  return {
    user,
  };
});
