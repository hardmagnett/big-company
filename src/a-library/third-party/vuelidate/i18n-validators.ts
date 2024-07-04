
import * as validators from '@vuelidate/validators'
import * as validatorsCustom from './custom-validators';

import {t} from 'i18next';

const { createI18nMessage } = validators
const messagePath = ({ $validator }: { $validator: string}) => `validationRules.${$validator}`;
const messageParams = (params)=>{
  // Если передать параметр так, то он будет более приоритетным.
  // minLength: helpers.withParams({fieldName: 'unusualAddressFieldNameToTranslate'}, minLength(3)),
  const fieldnameToTranslate = params.fieldName ?? params.property
  console.log(params); console.log('^...params:') 
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

// Стандартные
export const required = withI18nMessage(validators.required)
export const email = withI18nMessage(validators.email)
export const minLength = withI18nMessage(validators.minLength, { withArguments: true })
export const numeric = withI18nMessage(validators.numeric)
export const integer = withI18nMessage(validators.integer)
export const minValue = withI18nMessage(validators.minValue, { withArguments: true })

// Кастомные
// export const required = withI18nMessage(validators.required)
export const isTrue = validatorsCustom.isTrue
