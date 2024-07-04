
import * as validators from '@vuelidate/validators'
import {t} from 'i18next';

const { createI18nMessage } = validators
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

const minLength = minLengthWM

export {
  minLength
}
