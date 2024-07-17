
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
  getParams?: GetParams
}

class Fetchios {
  private readonly baseUrl: string
  constructor(
    {baseUrl = ''}: ConstructorParams = {baseUrl: ''}
  ){
    this.baseUrl = baseUrl
  }
  private _prepareUrl({url, getParams}: {url: string, getParams: GetParams}){
    let finalUrl = this.baseUrl + url
    let convertedGetParams = convertObjectForURLSearchParams(getParams)
    let searchParamsString = new URLSearchParams(convertedGetParams).toString()
    if (searchParamsString) {
      finalUrl = finalUrl + '?' + searchParamsString
    }
    return finalUrl
  }
  fetch({url, method, getParams = {}}: FetchParams ){
    return new Promise((resolve, reject) => {
      let finalUrl = this._prepareUrl({url, getParams})

      fetch(
        finalUrl, {
          method: method,
        })
        .then(function(res){
          if (!res.ok) {
            // Если код не 2xx
            throw new Error(`HTTP ошибка! status: ${res.status}`);
          } else {
            return res.json();
          }
        })
        .then(function(data){
          resolve(data)
        })
        .catch(function(err) {
          // Сюда попадают только сетевые ошибки (Офлайн, ошибки DNS, сети и т.п.). Например, net::ERR_FAILED.
          reject(err)
        });
    })
  }
}

export default Fetchios
