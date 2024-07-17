import {http, HttpResponse} from "msw"

import {getParamAsNumber, splitGetParamToNumberArray} from '@/backend-mocking/handlers/helpers.js'

const perPage = 20

export const createGetHandler = ({baseUrl, dbInstance})=>{
  return http.get(`${baseUrl}/employees`, ({request, params, cookies}) => {
    
    const url = new URL(request.url)
    const page = getParamAsNumber('page', url)
    const position_ids = splitGetParamToNumberArray('position_ids', url)
    
    const selectedEmployees = dbInstance.employee.findMany({
      orderBy: {
        id: 'desc',
      },
      take: perPage,
      skip: perPage * (page - 1),
    })
      .map(e=>{
        let position = dbInstance.position.findFirst({
          where: {
            id: {
              equals: e.position.id,
            }
          }
        })
        return {
          id: e.id,
          firstname: e.firstname,
          lastname: e.lastname,
          position: {
            id: position.id
          }
        }
      })
    return HttpResponse.json(
      {
        data: selectedEmployees
      },
      )
  })
}

