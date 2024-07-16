import {http, HttpResponse} from "msw"

export const createGetHandler = ({baseUrl, dbInstance})=>{
  return http.get(`${baseUrl}/employees`, () => {

    const allEmployees = dbInstance.employee.getAll()

    return HttpResponse.json({
      data: [1,2,3]
    })
  })
}

