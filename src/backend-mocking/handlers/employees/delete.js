import {http, HttpResponse} from "msw"

export const createDeleteHandler = ({ baseUrl, dbInstance }) => {
  return http.delete(`${baseUrl}/employees/:id`, async ({ request, params }) => {

    let { id } = params
    id = Number(id)
    
    
    const deletingEmployee = dbInstance.employee.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    })

    if (!deletingEmployee) {
      return new HttpResponse(null, { status: 404 })
    }
    
    const deletedEmployee = dbInstance.employee.delete({
      where: {
        id: {
          equals: id,
        },
      },
    })
    return HttpResponse.json(deletedEmployee)
    
  })
}
