<template>
  <div :class="styles.container">
    <PointsCounter :class="styles.points" />
    <UserLeagueAndLevel :class="styles.league" />
    <ClickImage :class="styles.image" @click="onClick" />

    <Menu :class="styles.menu" />
  </div>
</template>

<script setup lang="ts">
import { PointsCounter } from "widgets/points-counter";
import { ClickImage } from "widgets/click-image";
import { Menu } from "widgets/menu";
import { UserLeagueAndLevel } from "entities/user";

import { useUserStore } from "features/user-settings";

import styles from "./styles.module.scss";

// constants
const userStore = useUserStore();

// methods
const onClick = (): void => {
  userStore.increasePoints();
};
</script>
