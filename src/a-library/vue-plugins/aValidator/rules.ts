import type { Rule } from "@/a-library/vue-plugins/aValidator/types";

const rules: Record<string, Rule> = {
  required: {
    check: (value, param) => {
      // if (!ruleParameter) {
      //
      // }
      const result = Boolean(value);
      return Boolean(value);
    },
    defaultErrorMessage: "Для поля :attribute значение :param неподходящее.",
  },
  minlength: {
    check: (value, param) => {
      return false
    },
    defaultErrorMessage: "Минимальная длина :attribute: должна быть :param.",
  },
};
export default rules
