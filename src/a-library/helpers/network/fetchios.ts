type FetchParams = {
  url: string
  method: 'get' | 'post' | 'put' | 'delete',
  // getParams?: Record<string, string|number>
  getParams?: Record<string, string>
  
}
/**
 * @baseUrl например 'https://ya.ru/' или '/api'
 */
type ConstructorParams = {
  baseUrl?: string  
}
// todo:: сделать обработчики ошибок. Как в статье.
class Fetchios {
  private readonly baseUrl: string
  constructor(
    {baseUrl = ''}: ConstructorParams = {baseUrl: ''}
  ){
    this.baseUrl = baseUrl
  }
  fetch({url, method, getParams}: FetchParams ){
    return new Promise((resolve, reject) => {
      const finalWithBase = this.baseUrl + url
      // todo:: преобразовывать числа и массивы в строки
      const finalUrl = finalWithBase + '?' + new URLSearchParams(getParams).toString()
      fetch(
        finalUrl, {
          method: method,
        })
        .then(function(res){
          // console.log(res); console.log('^...res:')
          return res.json();
        })
        .then(function(data){
          // console.log(data); console.log('^...data:')
          resolve(data)
        })
        .catch(function(err) {
          reject(err)
        });
    })
  }
}

export default Fetchios
