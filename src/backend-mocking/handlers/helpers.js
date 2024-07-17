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
export {
  splitGetParamToArray,
  splitGetParamToNumberArray,
  getParam,
  getParamAsNumber
}

