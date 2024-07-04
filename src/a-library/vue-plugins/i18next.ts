import type {App} from "vue";
import i18next from 'i18next';

export default {
  install: (app: App) => {
    i18next.init({
      // i18n применяется только для vuelidate.
      // Поэтому достаточно захоркоженного 'ru' и строк-переводов только 'ru'.
      lng: 'ru',
      // debug: true,
      debug: false,
      resources: {
        ru: {
          translation: {
            pages: {
              guide: {
                form: {
                  "addAtLeastOneBook": "Добавьте хотя-бы одну книгу",
                }
              }
            },
            validationFieldNames: {
              name: 'Имя',
              address: 'Адрес',
              title: 'Название',
              quantity: 'Количество',
            },
            validationRules: {
              // '{{property}}' - имя свойства обьекта-схемы валидации. obichnoOnoVTakomFormate
              // '{{min}}' - один из параметров конктетного валидатора. Могут быть разные.
              // '{{model}}' - значение, которое в данный момент находится в поле.
              // {{response}} - по умолчанию - boolean. Само-собой false, раз сообщение показано. Для кастомных валидатором можно возвращать что угодно.
              // '{{fieldname}}' - моё самописное поле, в котором находится человекочитабельное, уже переведенное название поля.
              "required": "Поле '{{fieldname}}' обязательное",
              "minLength": "У поля '{{fieldname}}'  минимальная длина {{min}}",
              "minValue": "У поля '{{fieldname}}'  минимальное значение {{min}}",
              "email": "{{model}} - неверный почтовый адрес",
              "numeric": "Значение должно быть числом",
              "integer": "Значение должно быть целым числом"
            },
          }
        }
      }
    });
  },
};
