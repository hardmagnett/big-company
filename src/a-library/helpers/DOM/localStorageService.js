// todo:: когда весь проект переедет на TS,
// сделать как здесь https://www.qupaya.com/blog/type-safe-local-storage

/**
 * В отличии от нативного localStorage,
 * возвращает string, number, boolean, object не строками, а теми типами, которые добавлялись.
 */
class LocalStorageService {
  setItem(key, value){
    localStorage.setItem(key, JSON.stringify({ value }));
  }

  getItem(key){
    const data = localStorage.getItem(key);

    if (data !== null) {
      return JSON.parse(data).value;
    }

    return null;
  }
}
const localStorageServiceSingleton = new LocalStorageService()
export default localStorageServiceSingleton

