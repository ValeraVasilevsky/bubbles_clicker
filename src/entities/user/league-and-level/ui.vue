<template>
  <article :class="styles.container" v-if="userStore.user">
    <div :class="styles.level">
      <div :class="styles.icon" />
      <div :class="styles.texts">
        <Typography :class="styles.title" variant="text-l-2" weight="700">
          Level
        </Typography>
        <Typography :class="styles.subtitle" variant="text-l-2" weight="500">
          {{ userLevel }} bubble
        </Typography>
      </div>
    </div>

    <div :class="styles.league">
      <div :class="styles.icon" />
      <div :class="styles.texts">
        <Typography :class="styles.title" variant="text-l-2" weight="700">
          League
        </Typography>
        <Typography :class="styles.subtitle" variant="text-l-2" weight="500">
          {{ userLeague }}
        </Typography>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Typography } from "shared/ui";
import { toUpperCaseFirstLetter } from "shared/utils";
import { useUserStore } from "features/user-settings";

import styles from "./styles.module.scss";
import { computed } from "vue";

// constants
const userStore = useUserStore();

// computed
const userLevel = computed((): string =>
  userStore.user?.level ? toUpperCaseFirstLetter(userStore.user.level) : ""
);

const userLeague = computed((): string =>
  userStore.user?.league ? toUpperCaseFirstLetter(userStore.user.league) : ""
);
</script>
