import type { Rule } from "@/a-library/vue-plugins/aValidator/types";

const rules: Record<string, Rule> = {
  required: {
    check: (value, param) => {
      // if (!ruleParameter) {
      //
      // }
      // console.log(value); console.log('^...value on required:')
      const result = Boolean(value);
      return result;
    },
    defaultErrorMessage: "Для поля :attribute значение :param неподходящее.",
  },
  minlength: {
    check: (value, param) => {
      // console.log(value); console.log('^...value on minlength:')
      const result = Boolean(value.length >=3)
      return result
    },
    defaultErrorMessage: "Длина значения :attribute: должна быть не менее :param.",
  },
};
export default rules
