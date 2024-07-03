
import * as validators from '@vuelidate/validators'
// import { required, helpers } from "@vuelidate/validators";
import {t} from 'i18next';
import {helpers} from "@vuelidate/validators";

const { createI18nMessage } = validators
// const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) })
const withI18nMessage = createI18nMessage({ t: t })


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
