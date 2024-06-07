
## Подключиние к проекту

```ts
// main.ts или аналог

import { createApp } from 'vue'
import App from './App.vue'

import bootstrapALibrary from '@/a-library/bootstrap.ts';

const app = createApp(App)

bootstrapALibrary({
  vueApp: app,
  appName: 'code-example'
})

```

```css
/*main.css или аналог*/
/*Подключить стили*/
@import 'a-library/assets/index';
```


```ts
// router.ts или аналог
import { createRouter, createWebHistory } from 'vue-router'

import aLibraryRoutes from '@/a-library/router/index.ts';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //...
    // Подключить маршруты библиотеки.
    // Опционально
    ...aLibraryRoutes
  ]
})

export default router
```
