import {http, HttpResponse} from "msw"

export const createPutHandler = ({ baseUrl, dbInstance }) => {
  return http.put(`${baseUrl}/employees/:id`, async ({ request, params }) => {

    let { id } = params
    id = Number(id)

    let body = await request.json()
    console.log(body); console.log('^...body:') 
    let newPositionForEmployee = dbInstance.position.findFirst({
      where: {
        id: {
          equals: body.position_id,
        },
      },
    });
    const updatedEmployee = dbInstance.employee.update({
      where: {
        id: {
          equals: id,
        },
      },
      data: {
        firstname: body.firstname.toLowerCase(),
        lastname: body.lastname,
        position: newPositionForEmployee,
      },
    })

    return HttpResponse.json({
      id:updatedEmployee.id,
      firstname:updatedEmployee.firstname,
      lastname:updatedEmployee.lastname,
      position: {
        id: updatedEmployee.position.id
      },
    })

  })
}
