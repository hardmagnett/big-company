/**
 * Получает значение css-переменной.
 * На данный момент реализовано получение из :root{}.
 * Позже нужно будет реализовать передачу ноды и получения css-переменной из неё.
 * @param varName String - например '--bpSm'
 * @param options
 * @param options.cutPx Если значение например "768px", то преобразует в "768",
 * @param attemptConvertToNumber  Если после преобразований значение будет возможно перевести в число, то будет переведено.
 * todo:: переименовать в getValueOfCSSVariable
 * todo:: переименовать attemptConvertToNumber в convertResultToNumber
 * todo:: допилить эту ф-ю. Расписать по пунктам что нужно с ней сделать. Щас уже мозги закипели.
 */

type OptionsType = {cutPx: boolean}
function getCSSVariable(varName: string, options?: OptionsType, attemptConvertToNumber?: true): number
function getCSSVariable(varName: string, options?: OptionsType, attemptConvertToNumber?: false): string
function getCSSVariable(varName: string, options: OptionsType = {
    cutPx: true,
  },
    attemptConvertToNumber:boolean = true,
  ): any
{
  // let result: string | number
  let  resultingString = getComputedStyle(document.documentElement).getPropertyValue(varName);
  if (options.cutPx) {
    resultingString = resultingString.replaceAll('px', '')
  }
  if (!attemptConvertToNumber) return resultingString

  let resultingNumber: number | null = null
  // Далее пробуем преобразовать в число.
  if_attemptConvertToNumber: if (attemptConvertToNumber) {
    // return 700

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

export default getCSSVariable
