import type { App } from 'vue'

// Components
// ==========

// Layout
import AContainer from "@/a-library/components/layout/AContainer/AContainer.vue";
import AHeader from "@/a-library/components/layout/AHeader/AHeader.vue";
import AMainMenu from '@/a-library/components/layout/AMainMenu/AMainMenu.vue';
import AHamburger from '@/a-library/components/layout/AHamburger/AHamburger.vue';
import APageHeader from '@/a-library/components/layout/APageHeader/APageHeader.vue';

// Forms
import ABtn from "@/a-library/components/forms/ABtn/ABtn.vue";
import AInput from "@/a-library/components/forms/AInput/AInput.vue";
import ACheckBox from "@/a-library/components/forms/ACheckBox/ACheckBox.vue";

// Typo
import AIcon from "@/a-library/components/typo/AIcon/AIcon.vue";

// Blocks
import ACard from "@/a-library/components/blocks/ACard/ACard.vue"

// Helpers
// =======
import localStorageService from '@/a-library/helpers/DOM/localStorageService'


/**
 * Подключает компоненты из библиотеки.
 * На практике в приложении обычно используется бОльшая часть возможностей библиотеки.
 * Поэтому не скромничаем и подключаем все компоненты сразу.
 * @param vueApp Приложение Vue.
 * @param appName Используется, например для установки префикса (пространства имен) в localStorage
 */
export default function({
  vueApp,
  appName
}: { vueApp: App, appName: string }){
  // Components
  // ==========

  // Layout
  vueApp.component('AContainer', AContainer);
  vueApp.component('AHeader', AHeader);
  vueApp.component('AMainMenu', AMainMenu);
  vueApp.component('AHamburger', AHamburger);
  vueApp.component('APageHeader', APageHeader);

  // Forms
  vueApp.component('ABtn', ABtn);
  vueApp.component('AInput', AInput);
  vueApp.component('ACheckBox', ACheckBox);

  // Typo
  vueApp.component('AIcon', AIcon);

  // Blocks
  vueApp.component('ACard', ACard);

  // Helpers
  // =======
  localStorageService.setStoragePrefix(appName)
}