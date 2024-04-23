<template>
  <BubbleImage :class="styles.image" @click="emits('click')" />
</template>

<script setup lang="ts">
import BubbleImage from "./bubble.svg";

import styles from "./styles.module.scss";

// constants
const emits = defineEmits(["click"]);
</script>
