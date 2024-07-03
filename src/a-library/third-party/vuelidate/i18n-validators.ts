
import * as validators from '@vuelidate/validators'
// import { required, helpers } from "@vuelidate/validators";
import {t} from 'i18next';
import {helpers} from "@vuelidate/validators";

const { createI18nMessage } = validators
/* eslint-disable */

function createI18nMessageMOVE_ME_TO_ANOTHER_FILE(_ref) {
  let {
    t,
    messagePath = _ref2 => {
      let {
        $validator
      } = _ref2;
      return `validations.${$validator}`;
    },
    messageParams = params => params
  } = _ref;
  return function withI18nMessage(validator) {
    let {
      withArguments = false,
      messagePath: localMessagePath = messagePath,
      messageParams: localMessageParams = messageParams
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    function message(props) {
      return t(localMessagePath(props), localMessageParams(_objectSpread2({
        model: props.$model,
        property: props.$property,
        pending: props.$pending,
        invalid: props.$invalid,
        response: props.$response,
        validator: props.$validator,
        propertyPath: props.$propertyPath
      }, props.$params)));
    }

    if (withArguments && typeof validator === 'function') {
      return function () {
        return helpers.withMessage(message, validator(...arguments));
      };
    }

    return helpers.withMessage(message, validator);
  };
}
/* eslint-enable */


const messagePath = ({ $validator }: { $validator: string}) => `validationRules.${$validator}`;

// const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) })
const withI18nMessage = createI18nMessage({
  t: t,
  messagePath

})


export const required = withI18nMessage(validators.required)
export const minLength = withI18nMessage(validators.minLength, { withArguments: true })

// export const required = validators.required
// export const minLength = validators.minLength



let result: string
result = t('validationRules.required', { property: 'Имя' });
console.log(result); console.log('^...result:')

result = t('validationRules.minLength', { property: 'Имя', model: 2, min: 6 });
console.log(result); console.log('^...result:')

// console.dir(t); console.log('^...t:')
