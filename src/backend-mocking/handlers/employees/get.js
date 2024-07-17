import {http, HttpResponse} from "msw"

import {getParamAsNumber, splitGetParamToNumberArray} from '@/backend-mocking/handlers/helpers.js'


export const createGetHandler = ({baseUrl, dbInstance})=>{
  return http.get(`${baseUrl}/employees`, ({request, params, cookies}) => {

    // return HttpResponse.error()
    
    const url = new URL(request.url)
    const page = getParamAsNumber('page', url)
    const position_ids = splitGetParamToNumberArray('position_ids', url)
    
    const allEmployees = dbInstance.employee.getAll()

    // todo:: убрать хардкод
    return HttpResponse.json(
      {
        data: [1,2,3]
      },
      // { status: 401 }
      )
  })
}

