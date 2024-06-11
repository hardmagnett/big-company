import { createApp } from 'vue'
import { createPinia } from 'pinia'
import bootstrapALibrary from '@/a-library/bootstrap';


import App from './App.vue'
import router from './router'

import {menuItemsInjectionKey} from '@/a-library/components/layout/AMainMenu/types';
import menuItems from '@/app/data/menuItems';

import './main.css'


const app = createApp(App)

bootstrapALibrary({
  vueApp: app,
    appName: 'code-example'
    })

app.use(createPinia())
app.use(router)

app.provide(menuItemsInjectionKey, menuItems)

app.mount('#app')
