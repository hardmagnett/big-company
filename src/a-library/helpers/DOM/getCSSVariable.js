/**
 * Получает значение css-переменной.
 * На данный момент реализовано получение из :root{}.
 * Позже нужно будет реализовать передачу ноды и получения css-переменной из неё.
 * @param varName String - например '--bpSm'
 * @param options
 */
export default function getCSSVariable(varName, options = {
  // Если значение например "768px", то преобразует в "768",
  cutPx: true,

  // Если после преобразований значение будет возможно перевести в число, то будет переведено.
  // Например "768" в 768.
  attemptConvertToNumber: true,
}){
  let result = getComputedStyle(document.documentElement).getPropertyValue(varName);
  if (options.cutPx) {
    result = result.replaceAll('px', '')
  }

  if_attemptConvertToNumber: if (options.attemptConvertToNumber) {

    // Если result равен "" или " ", то Number(result) вернет 0. Тут такое преобразование не нужно.
    let isResultEmptyOrConsistFromOnlySpaces = result.replaceAll(' ', '').length === 0
    if (isResultEmptyOrConsistFromOnlySpaces) break if_attemptConvertToNumber

    let convertedToNumber = Number(result)
    let isResultConvertedToNumberIsNan = Number.isNaN(convertedToNumber)
    if (isResultConvertedToNumberIsNan) break if_attemptConvertToNumber

    result = convertedToNumber
  }
  return result
}
