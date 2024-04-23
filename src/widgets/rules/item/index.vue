<template>
  <article :class="styles.container">
    <div :class="styles.icon" />

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
  icon?: SVGElement;
  title: string;
  description: string;
}

// constants
const props = defineProps<RulesListItem>();
</script>
