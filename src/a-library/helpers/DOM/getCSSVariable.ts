/**
 * Получает значение css-переменной.
 * На данный момент реализовано получение из :root{}.
 * Позже нужно будет реализовать передачу ноды и получения css-переменной из неё.
 * @param varName String - например '--bpSm'
 */
function getValueOfCSSVariable(varName: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(varName);
}

/**
 * Подходит, например, для получения ширины экрана браузераю
 * @param varName
 */
function getValueOfCSSVariableAsNumber(varName: string): number {
  let resultingString = getValueOfCSSVariable(varName)

  let regexp = new RegExp('(px|rem)$', 'ig')
  resultingString = resultingString.replaceAll(regexp, '')

  let isResultEmptyOrConsistFromOnlySpaces = resultingString.replaceAll(' ', '').length === 0
  if (isResultEmptyOrConsistFromOnlySpaces) {
    throw new Error('Строковое значение переменной пустое и не может быть корректно приведено к числу')
  }
  let convertedToNumber = Number(resultingString)
  let isResultConvertedToNumberIsNan = Number.isNaN(convertedToNumber)
  if (isResultConvertedToNumberIsNan) {
    throw new Error('Числовое значение является NaN и не может быть корректро использовано')
  }
  return convertedToNumber
}
export {getValueOfCSSVariable, getValueOfCSSVariableAsNumber}
