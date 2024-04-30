<template>
  <div :class="styles.container">
    <div :class="styles.gradient" />

    <div :class="styles.img">
      <MindIcon />
      <LogoIcon />
    </div>
    <div :class="styles.texts">
      <Typography variant="h1" :class="styles.title">
        WELCOME TO BUBBLE HERO
      </Typography>

      <Typography variant="text-l-3" :class="styles.subtitle">
        Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu
        nisl nunc mi
      </Typography>
    </div>

    <RulesList />

    <BaseButton :class="styles.button" @click="start">Start playing</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { RulesList } from "widgets/rules";
import { BaseButton, Typography } from "shared/ui";
import { useRouter } from "vue-router";

import LogoIcon from "shared/icons/logo.svg";
import MindIcon from "shared/icons/mind-icon.svg";

import styles from "./styles.module.scss";

import { ROUTER_NAME } from "app/constants";

// constants
const router = useRouter();

// methods
const start = (): void => {
  router.push({ name: ROUTER_NAME.HOME });
};
</script>
