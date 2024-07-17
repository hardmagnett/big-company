import type { App } from "vue";

// Components
// ==========

// Layout
import AContainer from "@/a-library/components/layout/AContainer/AContainer.vue";
import AHeader from "@/a-library/components/layout/AHeader/AHeader.vue";
import AMainMenu from "@/a-library/components/layout/AMainMenu/AMainMenu.vue";
import AHamburger from "@/a-library/components/layout/AHamburger/AHamburger.vue";
import APageHeader from "@/a-library/components/layout/APageHeader/APageHeader.vue";
import APageHeaderWithTeleport from "@/a-library/components/layout/APageHeaderWithTeleport/APageHeaderWithTeleport.vue";

// Forms
import AFormButtonsWrapper from "@/a-library/components/forms/AFormButtonsWrapper/AFormButtonsWrapper.vue";
import AInputControl from "@/a-library/components/forms/AInputControl/AInputControl.vue";
import AInputControlHint from "@/a-library/components/forms/AInputControlHint/AInputControlHint.vue";
import ABtn from "@/a-library/components/forms/ABtn/ABtn.vue";
import AInput from "@/a-library/components/forms/AInput/AInput.vue";
import ACheckBox from "@/a-library/components/forms/ACheckBox/ACheckBox.vue";
import AMultiSelect from "@/a-library/components/forms/AMultiselect/AMultiSelect.vue";

// Typo
import AIcon from "@/a-library/components/typo/AIcon/AIcon.vue";

// Blocks
import ACard from "@/a-library/components/blocks/ACard/ACard.vue";

// Other
import ATable from "@/a-library/components/other/ATable/ATable.vue";
import ADialog from "@/a-library/components/other/ADialog/ADialog.vue";
import AToasts from "@/a-library/components/other/AToasts/AToasts.vue";
import AToast from "@/a-library/components/other/AToasts/AToast.vue";
import AMountedTeleport from "@/a-library/components/other/AMountedTeleport/AMountedTeleport.vue";

// Helpers
// =======
import localStorageService from "@/a-library/helpers/DOM/localStorageService";

// Vue Plugins
// ===========
import responsiveGlobalStorage from "@/a-library/vue-plugins/responsiveGlobalStorage";
import toast from "@/a-library/vue-plugins/toast";
import i18next from "@/a-library/vue-plugins/i18next";
import templateHelpers from "@/a-library/vue-plugins/templateHelpers";
import piniaOrm from "@/a-library/vue-plugins/piniaOrm";

/**
 * Подключает компоненты из библиотеки.
 * На практике в приложении обычно используется бОльшая часть возможностей библиотеки.
 * Поэтому не скромничаем и подключаем все компоненты сразу.
 * @param vueApp Приложение Vue.
 * @param appName Используется, например для установки префикса (пространства имен) в localStorage
 */
export default function ({
  vueApp,
  appName,
}: {
  vueApp: App;
  appName: string;
}) {
  // Components
  // ==========

  // Layout
  vueApp.component("AContainer", AContainer);
  vueApp.component("AHeader", AHeader);
  vueApp.component("AMainMenu", AMainMenu);
  vueApp.component("AHamburger", AHamburger);
  vueApp.component("APageHeader", APageHeader);
  vueApp.component("APageHeaderWithTeleport", APageHeaderWithTeleport);

  // Forms
  vueApp.component("AFormButtonsWrapper", AFormButtonsWrapper);
  vueApp.component("AInputControl", AInputControl);
  vueApp.component("AInputControlHint", AInputControlHint);
  vueApp.component("ABtn", ABtn);
  vueApp.component("AInput", AInput);
  vueApp.component("ACheckBox", ACheckBox);
  vueApp.component("AMultiSelect", AMultiSelect);

  // Typo
  vueApp.component("AIcon", AIcon);

  // Blocks
  vueApp.component("ACard", ACard);

  // Other
  vueApp.component("ATable", ATable);
  vueApp.component("ADialog", ADialog);
  vueApp.component("AToasts", AToasts);
  vueApp.component("AToast", AToast);
  vueApp.component("AMountedTeleport", AMountedTeleport);

  // Helpers
  // =======
  localStorageService.setStoragePrefix(appName);

  // Vue-Plugins
  // ===========
  vueApp.use(responsiveGlobalStorage);
  vueApp.use(toast);
  vueApp.use(i18next);
  vueApp.use(templateHelpers);
  vueApp.use(piniaOrm);
}
