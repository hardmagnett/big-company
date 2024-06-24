
import AValidator from "./AValidator";
import type { App } from "vue";

export default {
  install: (
    app: App,
    // options  // options пока-что закомментил. Он вроде в статье нигде не используется. но TSна него ругается
  ) => {
    app.config.globalProperties.$validator = AValidator;
    app.directive("validate", AValidator.validateDirective);
  }
};


// todo:: раскомментить потом в процессе работы
// todo:: почему field_errors через snake_case, в то время пока остальные через pascalCase?

// todo:: продолжить отсюда Feature 2: It should validate all input fields in document.

// export const fieldErrors = AValitator.field_errors;
// export const validateDirective = AValitator.validateDirective;
// export const validateForm = AValitator.validateForm;
// export const validateInputs = AValitator.validateInputs;
// export const validateInput = AValitator.validateInput;
// export const addField = AValitator.addField;

// todo:: в статье написано что их можно применять вот так в компоненте напрямую.
// Когда доделаю - выбрать как лучше и зачем они вообще здесь.
// import { validateInputs, validateDirective, fieldErrors } from 'vue-nice-validate';
// const vValidate = validateDirective;
