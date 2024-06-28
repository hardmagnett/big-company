import {type ZodTypeAny, z, type ZodIssue} from 'zod'

// Возможно этих придется избежать
// import { get, groupBy } from 'lodash-es'
import {groupBy} from 'lodash-es';


import { ref, watch, toValue, type MaybeRefOrGetter } from 'vue'


export default function <T extends ZodTypeAny>(
  schema: T,
  formValues: MaybeRefOrGetter<Record<string, unknown>>,  // в оринигале было data
  options?: { mode?: 'eager' | 'lazy' }
) {
  const _opts = Object.assign({}, { mode: 'lazy' }, options)

  const isValid = ref(true)
  const errors = ref<Record<string, z.ZodIssue[]> | null>(null)

  const clearErrors = () => {
    errors.value = null
  }

  // // Function to initiate validation watch
  let unwatch: null | (() => void) = null // todo:: непонятно что здесь лежит
  const validationWatch = () => {
    if (unwatch !== null) {
      return
    }

    unwatch = watch(
      () => toValue(formValues),
      async () => {
        await validate()
      },
      { deep: true }
    )
  }

  // Function to perform validation
  const validate = async () => {
    clearErrors()

    const parseResult = await schema.safeParseAsync(toValue(formValues))
    isValid.value = parseResult.success
    console.log(parseResult); console.log('^...parseResult:')

    if (!parseResult.success) {
      const issues = parseResult.error.issues
      // todo:: здесь результат тот-же что и в lodash, по подчеркивает ошибкой. Найти способ чтоб было без ошибки.
      const groupedIssues = Object.groupBy(issues, ({path}) => path)
      console.log(groupedIssues); console.log('^...groupedIssues:')
      const groupedIssuesWithLodash = groupBy(parseResult.error.issues, 'path')
      console.log(groupedIssuesWithLodash); console.log('^...groupedIssuesWithLodash:')

      errors.value = groupedIssuesWithLodash
      validationWatch()

    }

    return errors
  }


  return {
    validate,
    // errors,
    // isValid,
    // clearErrors,
    // getError,
    // scrolltoError
  }
}
