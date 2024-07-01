import { z, type ZodTypeAny } from "zod";

// Возможно этих придется избежать
// import { get, groupBy } from 'lodash-es'
import { get, groupBy } from "lodash-es";
// todo:: удалить lodash нафиг
import { type MaybeRefOrGetter, ref, toValue, watch } from "vue";

export default function <T extends ZodTypeAny>(
  schema: T,
  formValues: MaybeRefOrGetter<Record<string, unknown>>, // в оринигале было data
  options?: { mode?: "eager" | "lazy" },
) {
  const _opts = Object.assign({}, { mode: "lazy" }, options);

  const isValid = ref(true);
  const errors = ref<Record<string, z.ZodIssue[]> | null>(null);

  const clearErrors = () => {
    errors.value = null;
  };

  // // Function to initiate validation watch
  let unwatch: null | (() => void) = null; // todo:: непонятно что здесь лежит
  const validationWatch = () => {
    if (unwatch !== null) {
      return;
    }

    unwatch = watch(
      () => toValue(formValues),
      async () => {
        await validate();
      },
      { deep: true },
    );
  };

  // Function to perform validation
  const validate = async () => {
    clearErrors();

    const parseResult = await schema.safeParseAsync(toValue(formValues));
    isValid.value = parseResult.success;
    // console.log(parseResult);
    // console.log("^...parseResult:");

    if (!parseResult.success) {
      const issues = parseResult.error.issues;
      // todo:: здесь результат тот-же что и в lodash, по подчеркивает ошибкой. Найти способ чтоб было без ошибки.
      const groupedIssues = Object.groupBy(issues, ({ path }) => path);
      // console.log(groupedIssues);
      // console.log("^...groupedIssues:");
      const groupedIssuesWithLodash = groupBy(parseResult.error.issues, "path");
      // console.log(groupedIssuesWithLodash);
      // console.log("^...groupedIssuesWithLodash:");

      errors.value = groupedIssuesWithLodash;
      validationWatch();
    }

    return errors;
  };
  // Function to scroll to the first error in the form
  const scrollToError = (selector = ".is-error", options = { offset: 0 }) => {
    const element = document.querySelector(selector);

    if (element) {
      const topOffset =
        element.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        options.offset;

      window.scrollTo({
        behavior: "smooth",
        top: topOffset,
      });
    }
  };
  // Function to get the error message for a specific form field, can be used to get errors for nested objects using dot notation path.
  // const getErrorsForPath = (path: string) => get(errors.value, `${path.replaceAll('.', ',')}.0.message`)
  const getErrorsForPath = (path: string) => {
    const fieldNameInZodErrors = `${path.replaceAll(".", ",")}`
    const zodErrors = errors.value?.[fieldNameInZodErrors] ?? []
    const textErrors = zodErrors.map(ze=>ze.message)
    return textErrors
  };

  // Activate validation watch based on the chosen mode
  if (_opts.mode === "eager") {
    validationWatch();
  }

  return {
    validate,
    errors,
    isValid,
    clearErrors,
    getErrorsForPath,
    scrollToError,
  };
}
