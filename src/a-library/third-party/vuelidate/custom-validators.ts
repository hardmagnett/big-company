import {helpers} from '@vuelidate/validators'

// В этом валидаторе не заморачивался с дефолтовым message.
// Не было подходящей ситуации, чтобы проверить.
// export const isTrue = (value: boolean) => value


export const isTrue = helpers.withMessage(
  (messageProps) => {
    console.log(messageProps); console.log('^...messageProps:')
    const {
      $property,
      $invalid,
      $params,
      $model
    } = messageProps

    const fieldName = $params.fieldName ?? $property
    // return `Значение поля '${$property}' '${$fieldName}' должно быть положительным`
    return `Значение поля '${fieldName}' должно быть положительным`
  },
  (value: boolean) => value
)
