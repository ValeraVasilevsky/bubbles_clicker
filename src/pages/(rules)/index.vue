<template>
  <div :class="styles.container">
    <BaseButton :class="styles.button" @click="start">Start playing</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { BaseButton } from "shared/ui";
import { useRouter } from "vue-router";

import styles from "./styles.module.scss";

import { ROUTER_NAME } from "app/constants";

// constants
const router = useRouter();

// methods
const start = (): void => {
  router.push({ name: ROUTER_NAME.HOME });
};
</script>
