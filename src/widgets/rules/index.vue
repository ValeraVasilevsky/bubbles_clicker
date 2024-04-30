<template>
  <div :class="styles.container">
    <RulesListItem v-for="item of rules" :key="item.title" v-bind="item" />
  </div>
</template>

<script setup lang="ts">
import { RulesListItem } from "./item";
import TapIcon from "shared/icons/mouse-circle.svg";
import UserIcon from "shared/icons/user.svg";
import DollarIcon from "shared/icons/dollar-circle.svg";

import styles from "./styles.module.scss";

// constants
const rules: {
  icon: string;
  title: string;
  description: string;
}[] = [
  {
    title: "Tap to farm bubbles token",
    description: "Porttitor leo a diam sollicitudin",
    icon: TapIcon,
  },
  {
    title: "Invite frens",
    description: "Porttitor leo a diam sollicitudin",
    icon: UserIcon,
  },
  {
    title: "Purchase boosters",
    description: "Porttitor leo a diam sollicitudin",
    icon : DollarIcon,
  },
];
</script>
