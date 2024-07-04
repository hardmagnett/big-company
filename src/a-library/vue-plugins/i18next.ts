import i18next from "i18next";

export default {
  install: () => {
    i18next.init({
      // i18n применяется только для vuelidate.
      // Поэтому достаточно захоркоженного 'ru' и строк-переводов только 'ru'.
      // Так-же всё свалено в кучу потому-что переводов пока-что очень мало.
      lng: "ru",
      debug: false,
      resources: {
        ru: {
          translation: {
            validationFieldNames: {
              name: "Имя",
              firstname: "Имя",
              lastname: "Фамилия",
              address: "Адрес",
              title: "Название",
              quantity: "Количество",

              forms: {
                demo: {
                  agree: "согласие", // Уже не применяется. Оставил для примера. Удалить, если аналогичных применений станет больше.
                },
              },
            },
            validationRules: {
              // Коробочные правила
              required: "Поле '{{fieldName}}' обязательное",
              minLength: "У поля '{{fieldName}}'  минимальная длина {{min}}",
              minValue: "У поля '{{fieldName}}'  минимальное значение {{min}}",
              email: "{{model}} - неверный почтовый адрес",
              numeric: "Значение должно быть числом",
              integer: "Значение должно быть целым числом",

              // Кастомные правила
              isTrue: "Значение поля '{{fieldName}}' должно быть положительным",

              // Применяется если в конкретном случае для правила нужно другое сообщение.
              forms: {
                demo: {
                  requiredOneBook: "Добавьте хотя-бы одну книгу",
                  agreeWithConditions: "Необходимо согласие",
                },
              },
            },
          },
        },
      },
    });
  },
};
