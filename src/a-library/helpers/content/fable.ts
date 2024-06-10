/**
 * Эта библиотека нужна исключительно для верстки или заполнения данными моделей, которые будут выводиться на этапе верстки.
 * Поэтому библиотека должна быть максимально лёгкой (в отличие от faker.js).
 */

import {randomBetween, sameRandom} from '@/a-library/helpers/language/randoms'

type Gender = 'male' | 'female'

export default {
  _emptyValuesAllowed: false,
  _isSameRandom: true,
  _randomFunction: function(){
    const result = this._isSameRandom ? sameRandom() : Math.random()
    return result
  },
  _getAny(availableValues: Array<string>){
    if (this._emptyValuesAllowed) {
      availableValues.unshift('')
    }

    const result = availableValues[Math.floor(this._randomFunction() * availableValues.length)]

    return result;
  },
  allowEmptyValues(){
    this._emptyValuesAllowed = true
  },
  useRealRandom(){
    this._isSameRandom = false
  },
  firstName({gender}: {gender?: Gender} = {}){
    const maleResults = ['Виктор', 'Андрей', 'Михаил', 'Семён', 'Константин']
    const femaleResults = ['Марина', 'Ирина', 'Ольга', 'Анастасия']
    let selectFrom
    switch(gender) {
      case 'male':
        selectFrom = maleResults
        break
      case 'female':
        selectFrom = femaleResults
        break
      default:
        selectFrom = [...maleResults, ...femaleResults]
        break
    }
    return this._getAny(selectFrom)
  },
  lastName({gender}: {gender?: Gender} = {}){
    const maleResults = ['Семенов', 'Ургант', 'Череззабороногузадерищенко', 'Минаев', 'Черноградский']
    const femaleResults = ['Семенова', 'Ургант', 'Череззабороногузадерищенко', 'Минаева', 'Черноградская']
    let selectFrom
    switch(gender) {
      case 'male':
        selectFrom = maleResults
        break
      case 'female':
        selectFrom = femaleResults
        break
      default:
        selectFrom = [...maleResults, ...femaleResults]
        break
    }
    return this._getAny(selectFrom)
  },
  /**
   *
   * @returns {string}  // например "Алексей Семенов"
   */
  fullName() {
    const gender: Gender = (this._randomFunction() > 0.5) ? 'male' : 'female'
    return `${this.firstName({gender})} ${this.lastName({gender})}`
  },
  avatarUrl(){
    return this._getAny([
      'https://s3.amazonaws.com/uifaces/faces/twitter/xravil/128.jpg',
      'https://s3.amazonaws.com/uifaces/faces/twitter/vladyn/128.jpg',
      'https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg',
      'https://s3.amazonaws.com/uifaces/faces/twitter/uxpiper/128.jpg',
      'https://s3.amazonaws.com/uifaces/faces/twitter/elisabethkjaer/128.jpg',
    ])
  },
  phone(){
    return this._getAny(['(924)265-77-44', '(957)546-28-47', '(932)229-67-07', '(938)478-69-55', '(968)921-44-92'])
  },
  login(){
    return this._getAny(['Terminator', 'UML-13-34', 'jacobs', 'Fender', 'Monro.1991'])
  },

  workPost(){
    return this._getAny(['Разработчик', 'Оператор', 'Менеджер', 'Директор', 'Заведующий Отделением'])
  },
  workDepartment(){
    return this._getAny(['Отдел 1', 'Отдел 2', 'Отдел 3', 'Отдел 4', 'Отдел 5'])
  },
  words({
          min = null,   // Number
          max = null,   // Number
          strict = 5

        } = {}){
    const wordsQty = (min && max) ? randomBetween(min, max, {sameRandom: true}) : strict
    const availableWords = ['пирамида', 'часы', 'декоратор', 'ракета', 'монитор','синхрофазотрон', 'дезоксирибонуклеиновая кислота']
    const resultArray = []
    for (let i = 1; i <= wordsQty; i++) {
      resultArray.push(this._getAny(availableWords))
    }
    const result = resultArray.join(' ')
    return result

  }

}
