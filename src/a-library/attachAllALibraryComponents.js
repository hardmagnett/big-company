import Container from "@/a-library/components/layout/Container/Container.vue";
import Btn from "@/a-library/components/forms/FormInputBtn.vue";
import Txt from "@/a-library/components/forms/FormInputTxt.vue";
import CheckBox from "@/a-library/components/forms/FormInputCheckBox.vue";

/**
 * На практике в приложении обычно используется большая часть возможностей библиотеки.
 * Поэтому не скромничаем и подключаем все компоненты сразу.
 */
export default function(app){
  app.component('container', Container);
  app.component('btn', Btn);
  app.component('txt', Txt);
  app.component('check-box', CheckBox);
}
