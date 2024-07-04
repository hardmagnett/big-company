import type {App} from "vue";
import i18next from 'i18next';
import {helpers} from "@vuelidate/validators";
import {isTrue} from "@/a-library/third-party/vuelidate/i18n-validators";

export default {
  install: (app: App) => {
    i18next.init({
      // i18n применяется только для vuelidate.
      // Поэтому достаточно захоркоженного 'ru' и строк-переводов только 'ru'.
      // Так-же всё свалено в кучу потому-что переводов пока-что очень мало.
      lng: 'ru',
      // debug: true,
      debug: false,
      resources: {
        ru: {
          translation: {
            // pages: {
            //   guide: {
            //     form: {
            //       // сейчас уже не применяется. todo:: удалить.
            //       "addAtLeastOneBook": "Добавьте хотя-бы одну книгу",
            //     }
            //   }
            // },
            validationFieldNames: {
              name: 'Имя',
              address: 'Адрес',
              title: 'Название',
              quantity: 'Количество',

              // Применяется если поле в схеме называется совсем не так. Как что? Запутался..
              // Например в таком случае
              // isTrue: helpers.withParams({fieldName: "forms.demo.agree"}, isTrue),
              // Но это тоже применимо. 100%.
              forms: {
                demo: {
                  "agree": 'согласие',  // Уже не применяется. Оставил для примера.
                }
              },


            },
            validationRules: {
              // Здесь - не названия правил!!!
              // Здесь - названия полей обьекта-схемы, в которой находятся правила.
              // Чаще всего они совпадают, но бывает и нет!
              // Может быть например такое название "'forms.demo.requiredOneBook'"

              // withMessage приоритетнее чем эти правила.

              // '{{property}}' - имя свойства обьекта-схемы валидации. obichnoOnoVTakomFormate
              // '{{min}}' - один из параметров конктетного валидатора. Могут быть разные.
              // '{{model}}' - значение, которое в данный момент находится в поле.
              // {{response}} - по умолчанию - boolean. Само-собой false, раз сообщение показано. Для кастомных валидатором можно возвращать что угодно.
              // '{{fieldname}}' - моё самописное поле, в котором находится человекочитабельное, уже переведенное название поля.

              // Коробочные правила
              "required": "Поле '{{fieldName}}' обязательное",
              "minLength": "У поля '{{fieldName}}'  минимальная длина {{min}}",
              "minValue": "У поля '{{fieldName}}'  минимальное значение {{min}}",
              "email": "{{model}} - неверный почтовый адрес",
              "numeric": "Значение должно быть числом",
              "integer": "Значение должно быть целым числом",
              // "requiredOneBook": 'Добавьте хотя-бы одну книгу',

              // Кастомные правила
              "isTrue": "Значение поля '{{fieldName}}' должно быть положительным",

              // Применяется если в конкретном случае для правила нужно другое сообщение.
              forms: {
                demo: {
                  "requiredOneBook": 'Добавьте хотя-бы одну книгу',
                  'agreeWithConditions': 'Необходимо согласие'
                }
              },
            },
          }
        }
      }
    });
  },
};
