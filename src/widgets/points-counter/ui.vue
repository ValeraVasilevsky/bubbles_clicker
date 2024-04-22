<template>
  <div :class="styles.container">
    <TokenLogo />

    <Typography variant="h3" :class="styles.points">
      {{ userStore.points }}
    </Typography>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "features/user-settings";
import { Typography } from "shared/ui";

import TokenLogo from "shared/icons/token.svg";

import styles from "./styles.module.scss";

// constants
const userStore = useUserStore();
</script>
