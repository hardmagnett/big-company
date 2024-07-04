
import * as validators from '@vuelidate/validators'
import * as validatorsCustom from './custom-validators';
import type {MessageParams, TranslationFunction} from '@vuelidate/validators'
// import type {MessageParams} from '@vuelidate/validators'
// import  {TranslationFunction} from '@vuelidate/validators'

import {t} from 'i18next';

// t as TrantitionFunction
// t as HTMLFormElement
// t is TranslationFunction

const { createI18nMessage } = validators
const messagePath = ({ $validator }: { $validator: string}) => `validationRules.${$validator}`;
const messageParams = (params: MessageParams)=>{
  // params.fieldName может появиться при таком использовании:
  // minLength: helpers.withParams({fieldName: 'unusualAddressFieldNameToTranslate'}, minLength(3)),
  const fieldnameToTranslate = params.fieldName ?? params.property
  return {
    ...params,
    fieldName: t(`validationFieldNames.${fieldnameToTranslate}`)
  };
}

// const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) })
const withI18nMessage = createI18nMessage({
  // @ts-ignore: В передаче и в приемё - функции из совершенно разных библиотек, но которые в теории должны быть совместимыми. Я не смог убедить TS что одно это другое.
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
export const isTrue = withI18nMessage(validatorsCustom.isTrue)
