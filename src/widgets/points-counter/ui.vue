<template>
  <div :class="styles.container">
    <TokenLogo />
  </div>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";

import TokenLogo from "shared/icons/token.svg";
</script>
