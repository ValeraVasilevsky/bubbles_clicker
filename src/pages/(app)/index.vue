<template>
  <div :class="styles.container">
    <PointsCounter />
  </div>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";

import { PointsCounter } from "widgets/points-counter";
</script>
