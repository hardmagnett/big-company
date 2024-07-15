import { createApp } from "vue";
import { createPinia } from "pinia";
import bootstrapALibrary from "@/a-library/bootstrap";
// @ts-ignore Всё что касается мокапирования делаю без типизации. Нет времени ещё и на типизацию этого дела.
// import mockServiceWorker from "@/app/vue-plugins/mockServiceWorker.js";


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
// app.use(mockServiceWorker);

app.provide(menuItemsInjectionKey, menuItems);


const globalProperties = app.config.globalProperties;
export { globalProperties };

// async function prepareApp() {
//   // @ts-ignore
//   const { worker } = await import("@/app/vue-plugins/browser.js");
//   return worker.start();
// }
// prepareApp().then(() => {
//   app.mount("#app");
// });

// @ts-ignore
const { worker } = await import("@/app/vue-plugins/browser.js");
await worker.start();

app.mount("#app");


