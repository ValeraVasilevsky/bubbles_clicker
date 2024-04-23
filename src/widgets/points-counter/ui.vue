<template>
  <div :class="styles.container">
    <TokenLogo />

    <Transition mode="out-in">
      <Typography variant="h1" weight="700" :class="styles.points">
        {{ userStore.points }}
      </Typography>
    </Transition>
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
