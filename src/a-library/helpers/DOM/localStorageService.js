// todo:: когда весь проект переедет на TS,
// сделать как здесь https://www.qupaya.com/blog/type-safe-local-storage

/**
 * В отличии от нативного localStorage,
 * возвращает string, number, boolean, object не строками, а теми типами, которые добавлялись.
 */
class LocalStorageService {
  setItem(key, value){
    // Сохранение в JSON-е даёт возможность при извлечении восстановить тип.
    localStorage.setItem(key, JSON.stringify({ value }));
  }

  getItem(key, otherwise){
    const data = localStorage.getItem(key);

    if (data !== null) {
      return JSON.parse(data).value;
    }
    return otherwise ?? null
  }
}
const localStorageServiceSingleton = new LocalStorageService()
export default localStorageServiceSingleton

