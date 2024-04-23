<template>
  <div :class="styles.container">
    <div :class="styles.item" v-for="item in menuItems" :key="item.icon">
      <component :is="item.icon" :class="styles.icon" />
      <Typography variant="text-l-2" :class="styles.title">
        {{ item.title }}
      </Typography>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Typography } from "shared/ui";

import FlashIcon from "shared/icons/flash.svg";
import LeaderBoardIcon from "shared/icons/leaderboard.svg";
import InviteIcon from "shared/icons/invite.svg";

import styles from "./styles.module.scss";

const menuItems: {
  title: string;
  icon: string;
}[] = [
  {
    title: "Boosters",
    icon: FlashIcon,
  },
  {
    title: "Leaderboard",
    icon: LeaderBoardIcon,
  },
  {
    title: "Invite",
    icon: InviteIcon,
  },
];
</script>
