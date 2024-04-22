import { createApp } from "vue";
import { router } from "app/router";

import App from "./app/app.vue";

import "./app/main.scss";

const app = createApp(App);

app.use(router).mount("#app");
