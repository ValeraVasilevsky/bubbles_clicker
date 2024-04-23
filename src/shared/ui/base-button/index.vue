<template>
  <button :class="buttonClasses">
    <Typography variant="text-l-2" weight="600">
      <slot />
    </Typography>
    <slot name="right-icon" />
  </button>
</template>

<script setup lang="ts">
import { Typography } from "shared/ui";

import { type BaseButtonProps } from "./types";

import styles from "./styles.module.scss";
import { computed } from "vue";

// constants
const props = withDefaults(defineProps<BaseButtonProps>(), {
  type: "primary",
});

// computed
const buttonClasses = computed(() => [
  styles.button,
  styles[props.type],
  {
    [styles.disabled]: props.disabled,
  },
]);
</script>
