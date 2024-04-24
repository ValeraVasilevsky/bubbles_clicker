<template>
  <TransitionGroup :name="styles.fade" tag="div" :class="styles.noty">
    <Typography
      :class="styles.item"
      variant="h2"
      weight="600"
      v-for="point in pointsStore.points"
      :key="point.id"
      :style="getStyles(point.x, point.y)"
    >
      {{ point.value }}
    </Typography>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { Typography } from "shared/ui";
import { useShowPointsStore } from "features/show-click-points";

import styles from "./styles.module.scss";

// constants
const pointsStore = useShowPointsStore();
// methods
const getStyles = (x: number, y: number): string => {
  return `top: ${y}px; left: ${x}px;`;
};
</script>
