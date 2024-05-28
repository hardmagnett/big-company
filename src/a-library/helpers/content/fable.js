/**
 * Эта бибилотека нужна исключительно для верстки или заполнения данными моделей, которые будут выводиться на этапе верстки.
 * Поэтому библиотека должна быть максимально лёгкой (в отличие от faker.js).
 */

import sameRandom from '@/a-library/helpers/language/sameRandom.js'

export default {
  _getAny(array){
    if (this._emptyValuesAllowed) {
      array.unshift('')
    }
    let randomFunction = this._sameRandom ? sameRandom : Math.random
    let result = array[Math.floor(randomFunction() * array.length)]
    return result;
  },
  _emptyValuesAllowed: false,
  _sameRandom: true,
  allowEmptyValues(){
    this._emptyValuesAllowed = true
  },
  useRealRandom(){
    this._sameRandom= false
  },
  firstName({
    gender = null, // "male"/"female"
  } = {}){
    let maleResults = ['Виктор', 'Андрей', 'Михаил', 'Семён', 'Константин']
    let femaleResults = ['Марина', 'Ирина', 'Ольга', 'Анастасия']
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
  lastName({
    gender = null, // "male"/"female"
  } = {}){
    let maleResults = ['Семенов', 'Ургант', 'Череззабороногузадерищенко', 'Минаев', 'Черноградский']
    let femaleResults = ['Семенова', 'Ургант', 'Череззабороногузадерищенко', 'Минаева', 'Черноградская']
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
    let gender = (Math.random() > 0.5) ? 'male' : 'female'
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
    let wordsQty = (min && max) ? _random(min, max) : strict
    let availableWords = ['пирамида', 'часы', 'декоратор', 'ракета', 'монитор']
    let resultArray = []
    for (let i = 1; i <= wordsQty; i++) {
      resultArray.push(this._getAny(availableWords))
    }
    let result = resultArray.join(' ')
    return result

  }

}
