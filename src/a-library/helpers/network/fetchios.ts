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
    const finalUrl = this.baseUrl + params.url
    fetch(
      finalUrl, {
        method: params.method,
    })
      .then(function(res){
        return res.json();
      })
      .then(function(data){
        
      })
      .catch(function(err) {});
    
  }
}

export default Fetchios
