import {type ZodTypeAny, z, type ZodIssue} from 'zod'

// Возможно этих придется избежать
// import { get, groupBy } from 'lodash-es'
import {groupBy} from 'lodash-es';


import { ref, watch, toValue, type MaybeRefOrGetter } from 'vue'


export default function <T extends ZodTypeAny>(
  schema: T,
  data: MaybeRefOrGetter<Record<string, unknown>>,
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
      () => toValue(data),
      async () => {
        await validate()
      },
      { deep: true }
    )
  }

  // Function to perform validation
  const validate = async () => {
    clearErrors()

    const parseResult = await schema.safeParseAsync(toValue(data))
    isValid.value = parseResult.success
    console.log(parseResult); console.log('^...parseResult:')

    if (!parseResult.success) {
      const issues = parseResult.error.issues
      console.log(issues); console.log('^...issues:')
      // const groupedIssues = Object.groupBy(issues, (item: ZodIssue, index) => {
      // const groupedIssues = Object.groupBy(issues, ({code}) => code)
      const groupedIssues = Object.groupBy(issues, ({path}) => path)
      console.log(groupedIssues); console.log('^...groupedIssues:')
      const groupedIssuesWithLodash = groupBy(parseResult.error.issues, 'path')
      console.log(groupedIssuesWithLodash); console.log('^...groupedIssuesWithLodash:')

      // errors.value = groupBy(parseResult.error.issues, 'path')
      // validationWatch()

      const inventory = [
        { name: "asparagus", type: "vegetables", quantity: 5 },
        { name: "bananas", type: "fruit", quantity: 0 },
        { name: "goat", type: "meat", quantity: 23 },
        { name: "cherries", type: "fruit", quantity: 5 },
        { name: "fish", type: "meat", quantity: 22 },
      ];
      const result = Object.groupBy(inventory, ({ type }) => type);
      // const result = Object.groupBy(inventory, ({ type }) => type);
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
