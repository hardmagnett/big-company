// todo:: После чисток кода  - в гисты и удалить

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
        await validateForm();
      },
      { deep: true },
    );
  };

  const validateForm = async () => {
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
  // Не проверял ещё
  const scrollToFirstError = (selector = ".is-error", options = { offset: 0 }) => {
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
  // Получает все ошибки для поля.
  const getErrorsForPath = (path: string) => {
    const fieldNameInZodErrors = `${path.replaceAll(".", ",")}`
    const zodErrors = _zodIssues.value?.[fieldNameInZodErrors] ?? []
    const textErrors = zodErrors.map(ze=>ze.message)
    return textErrors
  };

  // Условная активация eager-режима
  if (_opts.mode === "eager") {
    validationWatch();
  }


  return {
    validateForm,
    isFormValid,
    clearErrors,
    getErrorsForPath,
    scrollToFirstError,
  };
}
