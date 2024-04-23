<template>
  <component :is="element" :class="[variant, weight]">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

import {
  type TypographyProps,
  elementsMap,
  variantsMap,
  weightMap,
} from "./types";

// constants
const props = defineProps<TypographyProps>();

// computed
const element = computed((): string => props.as || elementsMap[props.variant]);
const variant = computed(() => variantsMap[props.variant]);
const weight = computed(() => props.weight && weightMap[props.weight]);
</script>
