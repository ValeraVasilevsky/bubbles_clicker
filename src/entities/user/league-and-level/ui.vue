<template>
  <article :class="styles.container" v-if="userStore.user">
    <div :class="styles.level">
      <div :class="[styles.icon, styles.level]">
        <Typography variant="text-l-3" weight="500">
          {{ userLevelIcon }}
        </Typography>
      </div>
      <div :class="styles.texts">
        <Typography :class="styles.title" variant="text-l-3" weight="700">
          Level
        </Typography>
        <Typography :class="styles.subtitle" variant="text-l-3" weight="500">
          {{ userLevel }} bubble
        </Typography>
      </div>
    </div>

    <div :class="styles.league">
      <div :class="styles.icon">
        <LeagueIcon :class="[styles.userLeague, styles[userLeagueIcon]]" />
      </div>
      <div :class="styles.texts">
        <Typography :class="styles.title" variant="text-l-3" weight="700">
          League
        </Typography>
        <Typography :class="styles.subtitle" variant="text-l-3" weight="500">
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

import { computed } from "vue";

import LeagueIcon from "shared/icons/league.svg";

import styles from "./styles.module.scss";

// constants
const userStore = useUserStore();

// computed
const userLevel = computed((): string =>
  userStore.user?.level ? toUpperCaseFirstLetter(userStore.user.level) : ""
);

const userLevelIcon = computed((): number => {
  return userStore.user?.level === "pro"
    ? 2
    : userStore.user?.level === "premium"
    ? 3
    : 1;
});

const userLeague = computed((): string =>
  userStore.user?.league ? toUpperCaseFirstLetter(userStore.user.league) : ""
);

const userLeagueIcon = computed(() => {
  return userStore.user?.league || "";
});
</script>
