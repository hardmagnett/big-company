/**
 * Получает значение css-переменной.
 * @param varName String - например '--bpSm'
 * @param node - если не передать, то будет искать переменную в :root{}
 */
function getValueOfCSSVariable(
  varName: string,
  node: HTMLElement | null = null,
): string {
  const nodeToGetPropertyValue = node ?? document.documentElement;
  return getComputedStyle(nodeToGetPropertyValue).getPropertyValue(varName);
}

/**
 * Подходит, например, для получения ширины экрана браузера.
 * @param varName
 * @param node
 */
function getValueOfCSSVariableAsNumber(
  varName: string,
  node: HTMLElement | null = null,
): number {
  let resultingString = getValueOfCSSVariable(varName, node);

  const regexp = new RegExp("(px|rem|ms|s)$", "ig");
  resultingString = resultingString.replaceAll(regexp, "");

  const isResultEmptyOrConsistFromOnlySpaces =
    resultingString.replaceAll(" ", "").length === 0;
  if (isResultEmptyOrConsistFromOnlySpaces) {
    throw new Error(
      "Строковое значение переменной пустое и не может быть корректно приведено к числу",
    );
  }

  const convertedToNumber = Number(resultingString);
  const isResultConvertedToNumberIsNan = Number.isNaN(convertedToNumber);
  if (isResultConvertedToNumberIsNan) {
    throw new Error(
      "Числовое значение является NaN и не может быть полезным. Вероятно значение CSS-переменной некорректное.",
    );
  }
  return convertedToNumber;
}
export { getValueOfCSSVariable, getValueOfCSSVariableAsNumber };
