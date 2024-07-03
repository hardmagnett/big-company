
import * as validators from '@vuelidate/validators'
// import { required, helpers } from "@vuelidate/validators";
import {t} from 'i18next';


const { createI18nMessage } = validators
const createI18nextMessage = ()=>{
  return function withI18nextMessage(validator) {
    return validators.helpers.withMessage(message, validator(...arguments));
  };
}


// const withI18nMessage = createI18nMessage({ t: I18n.global.t.bind(i18n) })
const withI18nextMessage = createI18nextMessage(t)


// export const requiredOLD = withI18nMessage(validators.required)
// export const requiredNew = withI18nextMessage(validators.required)
// export const minLengthNew = withI18nextMessage(validators.minLength, { withArguments: true })


// export const minLength = withI18nMessage(validators.minLength, { withArguments: true })
// export const maxLength = withI18nMessage(validators.maxLength(10))

export const required = validators.required
export const minLength = validators.minLength
//
// export  minLength



let result: string
result = t('validationRules.required', { property: 'Имя' });
console.log(result); console.log('^...result:')

result = t('validationRules.minLength', { property: 'Имя', model: 2, min: 6 });
console.log(result); console.log('^...result:')
