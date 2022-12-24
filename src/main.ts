import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router.ts'

import './main.scss'

import Container from "@/a-library/components/layout/Container/Container.vue";
import Btn from "@/a-library/components/forms/FormInputBtn.vue";
import Txt from "@/a-library/components/forms/FormInputTxt.vue";
import CheckBox from "@/a-library/components/forms/FormInputCheckBox.vue";

const app = createApp(App)

// Регистрация глобальных компонентов start
// todo:: вынести это отсюда куда-нить. Их будет много.
app.component('container', Container);
app.component('btn', Btn);
app.component('txt', Txt);
app.component('check-box', CheckBox);
// Регистрация глобальных компонентов end

app.use(createPinia())
app.use(router)

app.mount('#app')
