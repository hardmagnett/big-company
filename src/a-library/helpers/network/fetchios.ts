
/**
 * @baseUrl например 'https://ya.ru/' или '/api'
 */
type ConstructorParams = {
  baseUrl?: string  
}

type GetParams = Record<string, string|number|string[]|number[]>
let convertObjectForURLSearchParams = (getParams: GetParams): Record<string, string>=>{
  let convertedParams: Record<string, string> = {}
  for (let key in getParams) {
    if (Object.prototype.hasOwnProperty.call(getParams, key)) {
      let resultingKey = key.toString()
      let val = getParams[key];
      let resultingVal: string
      if (typeof val === 'number') {
        resultingVal = val.toString()
      } else if (Array.isArray(val)) {
        resultingVal = val.join(',')
      } else {
        resultingVal = val.toString()
      }
      convertedParams[resultingKey] = resultingVal
    }
  }
  return convertedParams
}

type FetchParams = {
  url: string
  method: 'get' | 'post' | 'put' | 'delete',
  // getParams?: Record<string, string|number>
  // getParams?: Record<string, string>
  getParams?: GetParams

}
// todo:: сделать обработчики ошибок. Как в статье.
class Fetchios {
  private readonly baseUrl: string
  constructor(
    {baseUrl = ''}: ConstructorParams = {baseUrl: ''}
  ){
    this.baseUrl = baseUrl
  }
  fetch({url, method, getParams = {}}: FetchParams ){
    return new Promise((resolve, reject) => {
      const finalWithBase = this.baseUrl + url

      let convertedGetParams = convertObjectForURLSearchParams(getParams)
      // todo:: добавлять знак вопроса только если есть гет-параметры
      const finalUrl = finalWithBase + '?' + new URLSearchParams(convertedGetParams).toString()
      // console.log(finalUrl); console.log('^...finalUrl:') 
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
