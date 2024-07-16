type FetchParams = {
  method: 'get' | 'post' | 'put' | 'delete', 
  url: string
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
  fetch(params: FetchParams ){
    return new Promise((resolve, reject) => {
      const finalUrl = this.baseUrl + params.url
      fetch(
        finalUrl, {
          method: params.method,
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
