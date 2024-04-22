<template>
  <component :is="element" :class="variant">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { type TypographyProps, elementsMap, variantsMap } from "./types";

// constants
const props = defineProps<TypographyProps>();

// computed
const element = computed((): string => props.as || elementsMap[props.variant]);
const variant = computed(() => variantsMap[props.variant]);
</script>
