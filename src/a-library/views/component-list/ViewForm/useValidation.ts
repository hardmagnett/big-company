
import { z, type ZodTypeAny } from "zod";

import { type MaybeRefOrGetter, ref, toValue, watch } from "vue";

export default function <T extends ZodTypeAny>(
  schema: T,
  formValues: MaybeRefOrGetter<Record<string, unknown>>, // в оринигале было data
  options?: { mode?: "eager" | "lazy" },
) {
  const _opts = Object.assign({}, { mode: "lazy" }, options);

  const isFormValid = ref(true);
  // Пришлось завернуть в Partial, потому-что Object.groupBy возвращает Partial
  const _zodIssues = ref<Partial<Record<string, z.ZodIssue[]>> | null>(null);

  const clearErrors = () => {
    _zodIssues.value = null;
  };

  // Функция, инициализирующая watch.
  let unwatch: null | (() => void) = null;
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

  const validate = async () => {
    clearErrors();

    const parseResult = await schema.safeParseAsync(toValue(formValues));
    isFormValid.value = parseResult.success;

    if (!parseResult.success) {
      const issues = parseResult.error.issues;
      const groupedIssues = Object.groupBy(issues, ({ path }) => path.join(','));
      _zodIssues.value = groupedIssues;
      validationWatch();
    }

    return _zodIssues;
  };
  // Скроллит к первой ошибке в форме
  // todo:: проверить и подкорректировать работу скролла
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
    const zodErrors = _zodIssues.value?.[fieldNameInZodErrors] ?? []
    const textErrors = zodErrors.map(ze=>ze.message)
    return textErrors
  };

  // Activate validation watch based on the chosen mode
  if (_opts.mode === "eager") {
    validationWatch();
  }


  // errors: _zodIssues,
  return {
    validate,
    isFormValid,
    clearErrors,
    getErrorsForPath,
    scrollToError,
  };
}
