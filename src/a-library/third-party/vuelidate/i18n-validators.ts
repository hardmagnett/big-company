
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
const messageParams = (params)=>{
  // Если в валидатор передан параметр при помощи helpers.withParams, то переводим его.
  // Иначе переводим назавание поля из js-обьекта-схемы.
  const fieldnameToTranslate = params.fieldName ?? params.property
  return {
    ...params,

    fieldname: t(`validationFieldNames.${fieldnameToTranslate}`)
  };
}

// const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) })
const withI18nMessage = createI18nMessage({
  t: t,
  messagePath,
  messageParams
})


export const required = withI18nMessage(validators.required)

const minLengthWM = withI18nMessage(validators.minLength, { withArguments: true })

// Моя самописный декоратор.
// Не применяется, но может применяться если понадобиться для каждой ошибки выводить имя в своем падеже.
// Не учитывает i18n - предполагается что слово на правильном языке передается сюда из конфигурации схемы.
// Но можно заморочиться и реализовать это здесь.
// todo:: перенести в гисты отсюда
// К любому валидатору добавляет последний аргумент - объект.
// Например, если примет такой аргумент {fieldname: 'Имя'}
// то fieldname будет доступен для подстановки в сообщении об ошибке.
// address: { minLength: minLength(10,)({fieldname: 'Бунгало'})},
const withMoreParams = (validator)=>{
  // return (...params, additionalParams: {fieldname?: string}= {})=>{
  return (...params)=>{
    console.log(params); console.log('^...params:')
    // const additionalParams = {fieldname: 'Имя'}
    // const additionalParams = params.at(-1)
    // params.pop()

    // return(additionalParams: {fieldname?: string} = {fieldname: 'имя поля не указано'})=>{
    return({fieldname = 'имя поля не указано'} = {})=>{
      return helpers.withParams(
        // additionalParams,
        {fieldname},
        validator([...params])
      )
    }


  }
  // return validator
}
// todo:: и это в гисты про мой непримененный декоратор.
// const minLength = withMoreParams(minLengthWM)
const minLength = minLengthWM

export {
  minLength
}

// export const required = validators.required
// export const minLength = validators.minLength



// let result: string
// result = t('validationRules.required', { property: 'Имя' });
// console.log(result); console.log('^...result:')
//
// result = t('validationRules.minLength', { property: 'Имя', model: 2, min: 6 });
// console.log(result); console.log('^...result:')

// console.dir(t); console.log('^...t:')
