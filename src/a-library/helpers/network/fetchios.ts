type FetchParams = {
  method: 'get' | 'post' | 'put' | 'delete', 
  url: string
}
/**
 * @baseUrl например 'https://ya.ru/'
 */
type ConstructorParams = {
  baseUrl?: string  
}

class Fetchios {
  private baseUrl: string
  constructor(
    {baseUrl = ''}: ConstructorParams = {baseUrl: ''}
  ){
    this.baseUrl = baseUrl
  }
  fetch(params: FetchParams ){
    // console.log(this); console.log('^...this:')
    const finalUrl = this.baseUrl + params.url
    // console.log(finalUrl); console.log('^...finalUrl:')


    fetch(
      finalUrl, {
        method: params.method,
    })
      .then(function(res){
        //res.headers.get('Content-Type');    res.status;     res.statusText;
        return res.json(); //instead json can be: arrayBuffer,blob, formData, json, text
      })
      .then(function(data){
        
      })
      .catch(function(err) {});   //optional
    
  }
}

export default Fetchios
