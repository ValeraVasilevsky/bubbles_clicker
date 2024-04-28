<template>
  <div :class="styles.container">
    <PointsCounter :class="styles.points" />
    <UserLeagueAndLevel :class="styles.league" />
    <ClickImage :class="styles.image" @click="onClick" />

    {{ userStore.user?.currentEnergy }}

    <EnergyStatus :class="styles.energy" />
    <Menu :class="styles.menu" />
  </div>
</template>

<script setup lang="ts">
import { PointsCounter } from "widgets/points-counter";
import { ClickImage } from "widgets/click-image";
import { Menu } from "widgets/menu";
import { EnergyStatus } from "widgets/energy-status";

import { UserLeagueAndLevel } from "entities/user";

import { useUserStore } from "features/user-settings";

import { watch } from "vue";

import styles from "./styles.module.scss";

// constants
const userStore = useUserStore();

// methods
const onClick = (): void => {
  userStore.increasePoints();
  userStore.decreaseEnergy();
};

// watch
watch(
  () => userStore.user?.currentEnergy,
  () => {
    userStore.restoreEnergy();
  }
);
</script>
