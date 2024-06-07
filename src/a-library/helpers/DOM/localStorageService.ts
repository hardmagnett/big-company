// Переписывать на ts придется самостоятельно, т.к. в статье глубокая привязка к хелперам из angular.

/**
 * В отличие от нативного localStorage,
 * возвращает string, number, boolean, object не строками, а теми типами, которые добавлялись.
 *
 * Позволяет добавлять ко всем ключам префикс,
 * чтобы например при использовании микро-фронтов, или в случае разработки 2-х проектов на 1-м url
 * переменные не перетирали друг друга.
 */

let _storagePrefix = ''
class LocalStorageService {
  setStoragePrefix(prefix) {
    _storagePrefix = prefix
  }

  _createStorageKey(clientKey) {
    let result = _storagePrefix ? _storagePrefix + '--' + clientKey : clientKey
    return result
  }

  setItem(key, value){
    // Сохранение в JSON-е даёт возможность при извлечении восстановить тип.
    localStorage.setItem(this._createStorageKey(key), JSON.stringify({ value }));
  }

  getItem(key, otherwise){
    const data = localStorage.getItem(this._createStorageKey(key));

    if (data !== null) {
      return JSON.parse(data).value;
    }
    return otherwise ?? null
  }
}
const localStorageServiceSingleton = new LocalStorageService()
export default localStorageServiceSingleton

