<template>
  <div ref="image" @click="getClickPosition" :class="styles.container">
    <img src="./bubble.png" :class="styles.image" />
    <ClickPoints />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { ClickPoints } from "widgets/click-points";
import { useShowPointsStore } from "features/show-click-points";
import { useUserStore } from "features/user-settings";

import styles from "./styles.module.scss";

// constants
const emits = defineEmits(["click"]);
const image = ref<HTMLElement | null>(null);

const pointsStore = useShowPointsStore();
const userStore = useUserStore();

// methods
const getClickPosition = (event: MouseEvent): void => {
  if (!image.value || !userStore.user) return;

  const x: number = event.pageX;
  const y: number = event.pageY;

  const xPosition = x - image.value.offsetLeft;
  const yPosition = y - image.value.offsetTop;

  pointsStore.msgTemp({
    value: userStore.user.tap,
    x: xPosition,
    y: yPosition,
  });
  emits("click");
};
</script>
