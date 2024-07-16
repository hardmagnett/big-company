import {http, HttpResponse} from "msw"

// todo:: повыносить эту срань в хелперы-файл
const splitGetParamToArray = (paramName, urlInstance)=>{
  return urlInstance.searchParams.has(paramName) 
    ? urlInstance.searchParams.get(paramName).split(',') 
    : []
}
const splitGetParamToNumberArray = (paramName, urlInstance)=>{
  let result = splitGetParamToArray(paramName, urlInstance)
  result = result.map(i=>Number(i))
  return result
}

const getParam = (paramName, urlInstance) =>{
  return urlInstance.searchParams.has(paramName) ? urlInstance.searchParams.get(paramName) : null
}
const getParamAsNumber = (paramName, urlInstance) =>{
  let result = getParam(paramName, urlInstance)
  if (result) {
    result = Number(result)
  }
  return result
}

export const createGetHandler = ({baseUrl, dbInstance})=>{
  return http.get(`${baseUrl}/employees`, ({request, params, cookies}) => {
    const url = new URL(request.url)
    const page = getParamAsNumber('page', url)
    const position_ids = splitGetParamToNumberArray('position_ids', url)
    
    const allEmployees = dbInstance.employee.getAll()

    // todo:: убрать хардкод
    return HttpResponse.json({
      data: [1,2,3]
    })
  })
}

