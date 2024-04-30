<template>
  <article :class="styles.container">

    <div :class="styles.icon">
      <component :is="$props.icon" />
      <div v-if="showCounter(props.title)" :class="styles.counter">+1</div>
    </div>
    <div :class="styles.texts">
      <Typography variant="text-l-2" weight="700" :class="styles.title">
        {{ props.title }}
      </Typography>
      <Typography variant="text-l-3" weight="500" :class="styles.description">
        {{ props.description }}
      </Typography>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Typography } from "shared/ui";

import styles from "./styles.module.scss";

interface RulesListItem {
  icon: string;
  title: string;
  description: string;
}

// constants
const props = defineProps<RulesListItem>();

// methods
const showCounter = (title: string): boolean => {
  return title.toLowerCase().includes('invite')
}
</script>
