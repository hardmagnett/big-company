import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.scss'

import Btn from "@/components/omni-present/forms/FormInputBtn.vue";

const app = createApp(App)

// Регистрация глобальных компонентов start
// todo:: вынести это отсюда куда-нить. Их будет много.
app.component('btn', Btn);
// Регистрация глобальных компонентов end

app.use(createPinia())
app.use(router)

app.mount('#app')
