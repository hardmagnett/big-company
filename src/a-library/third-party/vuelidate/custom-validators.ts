import {helpers} from '@vuelidate/validators'

export const isTrueOLD = (value: boolean) => value


export const isTrue = helpers.withMessage(
  ({
     $property,
     $invalid,
     $params,
     $model
   // }) => `This field has a value of '${$model}' but must have a min length of ${$params.min} so it is ${$invalid ? 'invalid' : 'valid'}`,
   }) => `Значение поля ${$property} должно быть положительным`,
  (value: boolean) => value
)
