import { createApp } from "vue";
import { router } from "app/router";
import { createPinia } from "pinia";

import App from "./app/app.vue";

import "./app/main.scss";

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).mount("#app");
