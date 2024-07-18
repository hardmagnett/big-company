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

const globalProperties = app.config.globalProperties;
export { globalProperties };

// Импортировать это нужно именно при помощи await import.
// Иначе начнет перехватывать фрагменты сборки от Vite.
const { mockServiceWorker, unhandledRequestHandler } = await import(
  // @ts-ignore Мокапирование делаю без типизации. Может-быть потом переделаю.
  "@/app/vue-plugins/mockServiceWorker.js"
);
await mockServiceWorker.start({
  onUnhandledRequest: unhandledRequestHandler,
  quiet: true,
});

app.mount("#app");
