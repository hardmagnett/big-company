import {http, HttpResponse} from "msw"

import {getParamAsNumber, splitGetParamToNumberArray} from '@/backend-mocking/handlers/helpers.js'

const perPage = 20

export const createGetHandler = ({baseUrl, dbInstance})=>{
  return http.get(`${baseUrl}/employees`, ({request, params, cookies}) => {
    
    const url = new URL(request.url)
    const page = getParamAsNumber('page', url)
    const position_ids = splitGetParamToNumberArray('position_ids', url)
    
    const whereFilter = {
      // тут будет фильтрация по тексту и выбранным должностям
    }
    
    const selectedEmployees = dbInstance.employee.findMany({
      where: whereFilter,
      orderBy: {
        id: 'desc',
      },
      take: perPage,
      skip: perPage * (page - 1),
    }).map(e=>{
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
    
    let totalEmployeeCount = dbInstance.employee.count({
      where: whereFilter,
    })
    return HttpResponse.json(
      {
        total_count: totalEmployeeCount,
        data: selectedEmployees
      },
      )
  })
}

