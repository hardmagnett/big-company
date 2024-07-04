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
            validationRules: {
              // '{{property}}' - имя свойства обьекта-схемы валидации. obichnoOnoVTakomFormate
              // '{{min}}' - один из параметров конктетного валидатора. Могут быть разные.
              // '{{model}}' - значение, которое в данный момент находится в поле.
              "required": "Поле '{{property}}' '{{fieldname}}' обязательное.",
              "minLength": "У поля '{{fieldname}}'  минимальная длина {{min}}."
            },
            "key": "hello world"
          }
        }
      }
    });
    // app.config.globalProperties.$toast = createToast;
  },
};
