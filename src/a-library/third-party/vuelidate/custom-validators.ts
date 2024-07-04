import {helpers} from '@vuelidate/validators'

export const isTrue = helpers.withMessage(
  (messageProps) => {
    const {
      $property,
      $params,
    } = messageProps

    const fieldName = $params.fieldName ?? $property
    // return `Значение поля '${$property}' '${$fieldName}' должно быть положительным`
    return `Значение поля '${fieldName}' должно быть положительным`
  },
  (value: boolean) => value
)
