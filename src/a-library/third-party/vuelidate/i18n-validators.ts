
// @/utils/i18n-validators.js
import * as validators from '@vuelidate/validators'
import i18next from 'i18next';

// import { I18n } from "i18n"

// import { useI18n,  } from 'vue-i18n'
// const { t } = useI18n()

const { createI18nMessage } = validators

// const withI18nMessage = createI18nMessage({ t: I18n.global.t.bind(i18n) })
// const withI18nMessage = createI18nMessage({ t })
//
// // wrap each validator.
// export const required = withI18nMessage(validators.required)
// // validators that expect a parameter should have `{ withArguments: true }` passed as a second parameter, to annotate they should be wrapped
// export const minLength = withI18nMessage(validators.minLength, { withArguments: true })
// // or you can provide the param at definition, statically
// export const maxLength = withI18nMessage(validators.maxLength(10))

export const required = validators.required
export const minLength = validators.minLength
//
// export  minLength




const result = i18next.t('key');
console.log(result); console.log('^...result:')
