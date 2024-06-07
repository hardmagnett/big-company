/**
  Возвращает псевдо-случайные значения от 0 включительно до 1 не включительно. Как и Math.random()
  Но возвращает их в каждый раз в одном и том-же порядке.
 */
let previousResultForSameRandomFunction = 0.5
let sameRandomFunction = function(){
  let previousResult = previousResultForSameRandomFunction

  let result = Math.sin(previousResult)
  // Возьмем дробную часть от 4-го знака после запятой. Чтобы результаты выглядели хаотичнее.
  result = (result * 1000) % 1

  // Math.random не может вернуть 1. Для совместимости и эта функция пусть не возвращает 1.
  if (result === 1) result = 0.5


  let resultToSaveAsPrevious = result
  // Если результат равен 0, то и синус от него будет равен 0. И результат далее будет всегда 0.
  // Хак, чтобы такого не произошло.
  if (result === 0) resultToSaveAsPrevious = 0.5

  previousResultForSameRandomFunction = resultToSaveAsPrevious
  return result
}

let randomBetween = function(min: number, max: number, {
  floating = false,
  sameRandom = false
} = {}) {
  let randomFunction = sameRandom ? sameRandomFunction : Math.random

  let result = randomFunction() * (max - min + 1) + min
  if (!floating) {
    result = Math.floor(result)
  }

  return result

}

export {
  sameRandomFunction as sameRandom,
  randomBetween
}

