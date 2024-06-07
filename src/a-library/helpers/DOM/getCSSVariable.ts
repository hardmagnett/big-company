/**
 * Получает значение css-переменной.
 * На данный момент реализовано получение из :root{}.
 * Позже нужно будет реализовать передачу ноды и получения css-переменной из неё.
 * @param varName String - например '--bpSm'
 * @param options
 */
export default function getCSSVariable(varName: string, options = {
  // Если значение например "768px", то преобразует в "768",
  cutPx: true,

  // Если после преобразований значение будет возможно перевести в число, то будет переведено.
  // Например "768" в 768.
  attemptConvertToNumber: true,
}): string | number {
  // let result: string | number
  let  resultingString = getComputedStyle(document.documentElement).getPropertyValue(varName);
  if (options.cutPx) {
    resultingString = resultingString.replaceAll('px', '')
  }
  if (!options.attemptConvertToNumber) return resultingString

  let resultingNumber: number | null = null
  // Далее пробуем преобразовать в число.
  if_attemptConvertToNumber: if (options.attemptConvertToNumber) {

    // Если resultingString равен "" или " ", то Number(resultingString) вернет 0. Тут такое преобразование не нужно.
    let isResultEmptyOrConsistFromOnlySpaces = resultingString.replaceAll(' ', '').length === 0
    if (isResultEmptyOrConsistFromOnlySpaces) break if_attemptConvertToNumber

    let convertedToNumber = Number(resultingString)
    let isResultConvertedToNumberIsNan = Number.isNaN(convertedToNumber)
    if (isResultConvertedToNumberIsNan) break if_attemptConvertToNumber

    resultingNumber = convertedToNumber
  }
  // Если преобразовалось в число - возвращаем число, иначе возвращаем ранее полученную строку
  return resultingNumber ?? resultingString
}
