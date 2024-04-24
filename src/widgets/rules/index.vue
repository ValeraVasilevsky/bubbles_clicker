<template>
  <div :class="styles.container">
    <RulesListItem v-for="item of rules" :key="item.title" v-bind="item" />
  </div>
</template>

<script setup lang="ts">
import { RulesListItem } from "./item";

import styles from "./styles.module.scss";

// constants
const rules: {
  icon?: SVGElement;
  title: string;
  description: string;
}[] = [
  {
    title: "Tap to farm bubbles token",
    description: "2Porttitor leo a diam sollicitudin",
  },
  {
    title: "Invite frens",
    description: "Porttitor leo a diam sollicitudin",
  },
  {
    title: "Purchase boosters",
    description: "Porttitor leo a diam sollicitudin",
  },
];
</script>
