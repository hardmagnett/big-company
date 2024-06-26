
import AValidator, {
  validateForm
} from "./AValidator";
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

// export const validateInputs = AValitator.validateInputs;
// export const validateInput = AValitator.validateInput;

// todo:: в статье написано что их можно применять вот так в компоненте напрямую.
// Когда доделаю - выбрать как лучше и зачем они вообще здесь.
// import { validateInputs, validateDirective, fieldErrors } from 'vue-nice-validate';
// const vValidate = validateDirective;

export {
  validateForm
};
