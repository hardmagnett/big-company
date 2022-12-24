
## Подключиние к проекту

```ts
// main.ts или аналог

import { createApp } from 'vue'
import App from './App.vue'

import attachAllALibraryComponents from '@/a-library/attachAllALibraryComponents.js';

const app = createApp(App)

// Подключить все компоненты
attachAllALibraryComponents(app)

```

```scss
// main.scss или аналог
// Подключить стили
@import 'a-library/assets/index';
```

```ts
// vite.config.js
export default defineConfig({
  // ...
  css: {
    preprocessorOptions: {
      scss: {
        // Подключить переменные и миксины к каждому компоненту.
        additionalData: `@import "./src/a-library/assets/attach-it-to-every-component.scss";`
      }
    }
  }
})
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