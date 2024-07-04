import type {App} from "vue";
import i18next from 'i18next';

export default {
  install: (app: App) => {
    i18next.init({
      lng: 'en', // if you're using a language detector, do not define the lng option
      // debug: true,
      debug: false,
      resources: {
        en: {
          translation: {
            validationFieldNames: {
              name: 'Имя',
              address: 'Адрес'
            },
            validationRules: {
              // '{{property}}' - имя свойства обьекта-схемы валидации. obichnoOnoVTakomFormate
              // '{{min}}' - один из параметров конктетного валидатора. Могут быть разные.
              // '{{model}}' - значение, которое в данный момент находится в поле.
              // {{response}} - по умолчанию - boolean. Само-собой false, раз сообщение показано. Для кастомных валидатором можно возвращать что угодно.
              // '{{fieldname}}' - моё самописное поле, в котором находится человекочитабельное, уже переведенное название поля.
              "required": "Поле '{{fieldname}}' обязательное",
              "minLength": "У поля '{{fieldname}}'  минимальная длина {{min}}",
              "email": "'{{model}}' - неверный почтовый адрес"
            },
          }
        }
      }
    });
    // app.config.globalProperties.$toast = createToast;
  },
};
