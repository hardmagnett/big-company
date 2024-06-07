/**
 * В отличие от нативного localStorage,
 * возвращает string, number, boolean, object не строками, а теми типами, которые добавлялись.
 *
 * Позволяет добавлять ко всем ключам префикс,
 * чтобы например при использовании микро-фронтов, или в случае разработки 2-х проектов на 1-м url
 * переменные не перетирали друг друга.
 */

type TypeAvailableToStore = number | string | boolean
let _storagePrefix = ''
class LocalStorageService {
  setStoragePrefix(prefix: string) {
    _storagePrefix = prefix
  }

  _createStorageKey(clientKey: string ) {
    let result = _storagePrefix ? _storagePrefix + '--' + clientKey : clientKey
    return result
  }

  setItem(key: string, value: TypeAvailableToStore){
    // Сохранение в JSON-е даёт возможность при извлечении восстановить тип.
    localStorage.setItem(this._createStorageKey(key), JSON.stringify({ value }));
  }

  getItem(key: string, otherwise: TypeAvailableToStore){
    const data = localStorage.getItem(this._createStorageKey(key));

    if (data !== null) {
      return JSON.parse(data).value;
    }
    return otherwise ?? null
  }
}
const localStorageServiceSingleton = new LocalStorageService()
export default localStorageServiceSingleton

