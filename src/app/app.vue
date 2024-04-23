<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ROUTER_NAME } from "./constants";

// constants
const router = useRouter();
router.push({ name: ROUTER_NAME.RULES });
</script>
