<template>
  <div :class="styles.container" v-if="userStore.user">
    <div :class="styles.texts">
      <Typography variant="text-l-2" weight="700">Energy cap</Typography>
      <Typography variant="text-l-2" weight="700">
        {{ userStore.user.currentEnergy }} /
        {{ userStore.user.energy }}
      </Typography>
    </div>
    <div :class="styles.status" :style="statusBarGradient" />
  </div>
</template>

<script setup lang="ts">
import { Typography } from "shared/ui";
import { useUserStore } from "features/user-settings";
import { computed } from "vue";

import styles from "./styles.module.scss";

// constants
const userStore = useUserStore();

// computed
const statusBarGradient = computed(() => {
  if (!userStore.user) return "";
  const black = (userStore.user.currentEnergy * 100) / userStore.user.energy;
  return `background: linear-gradient(to right, #0f0f0f ${black}%, #f8f8f8 ${
    100 - black
  }%);`;
});
</script>
