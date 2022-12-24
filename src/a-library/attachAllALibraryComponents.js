// Layout
import AContainer from "@/a-library/components/layout/AContainer/AContainer.vue";
import AHeader from "@/a-library/components/layout/AHeader/AHeader.vue";
import AMainMenu from '@/a-library/components/layout/AMainMenu/AMainMenu.vue';


// Forms
import Btn from "@/a-library/components/forms/FormInputBtn.vue";
import Txt from "@/a-library/components/forms/FormInputTxt.vue";
import CheckBox from "@/a-library/components/forms/FormInputCheckBox.vue";

/**
 * На практике в приложении обычно используется большая часть возможностей библиотеки.
 * Поэтому не скромничаем и подключаем все компоненты сразу.
 */
export default function(app){
  // Layout
  app.component('AContainer', AContainer);
  app.component('AHeader', AHeader);
  app.component('AMainMenu', AMainMenu);

  // Forms
  app.component('btn', Btn);
  app.component('txt', Txt);
  app.component('check-box', CheckBox);
}
