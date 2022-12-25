// Layout
import AContainer from "@/a-library/components/layout/AContainer/AContainer.vue";
import AHeader from "@/a-library/components/layout/AHeader/AHeader.vue";
import AMainMenu from '@/a-library/components/layout/AMainMenu/AMainMenu.vue';


// Forms
import ABtn from "@/a-library/components/forms/ABtn/ABtn.vue";
import AInput from "@/a-library/components/forms/AInput/AInput.vue";
import ACheckBox from "@/a-library/components/forms/ACheckBox/ACheckBox.vue";

// Typo
import AIcon from "@/a-library/components/typo/AIcon/AIcon.vue";

/**
 * На практике в приложении обычно используется бОльшая часть возможностей библиотеки.
 * Поэтому не скромничаем и подключаем все компоненты сразу.
 */
export default function(app){
  // Layout
  app.component('AContainer', AContainer);
  app.component('AHeader', AHeader);
  app.component('AMainMenu', AMainMenu);

  // Forms
  app.component('ABtn', ABtn);
  app.component('AInput', AInput);
  app.component('ACheckBox', ACheckBox);

  // Typo
  app.component('AIcon', AIcon);
}
