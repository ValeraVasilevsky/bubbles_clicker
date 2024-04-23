import { createRouter, createWebHistory } from "vue-router";

import { ROUTER_NAME } from "app/constants";
import { Component } from "vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: (): Component => import("pages/(app)/layout.vue"),
      children: [
        {
          path: "",
          name: ROUTER_NAME.HOME,
          component: (): Component => import("pages/(app)/index.vue"),
        },
      ],
    },
    {
      path: "/rules",
      component: (): Component => import("pages/(rules)/layout.vue"),
      children: [
        {
          path: "",
          name: ROUTER_NAME.RULES,
          component: (): Component => import("pages/(rules)/index.vue"),
        },
      ],
    },
  ],
});
