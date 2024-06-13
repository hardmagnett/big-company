import { createApp } from "vue";
import { createPinia } from "pinia";
import bootstrapALibrary from "@/a-library/bootstrap";

import App from "./App.vue";
import router from "./router";

import { menuItemsInjectionKey } from "@/a-library/components/layout/AMainMenu/types";
import menuItems from "@/app/data/menuItems";

import "./main.css";

const app = createApp(App);

app.use(createPinia());

bootstrapALibrary({
  vueApp: app,
  appName: "code-example",
});

app.use(router);

app.provide(menuItemsInjectionKey, menuItems);

app.mount("#app");
