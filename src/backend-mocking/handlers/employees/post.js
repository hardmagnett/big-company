import {http, HttpResponse} from "msw"
// import fable from "@/a-library/helpers/content/fable.js"

export const createPostHandler = ({ baseUrl, dbInstance }) => {
  return http.post(`${baseUrl}/employees/`, async ({ request, params }) => {
     
    let body = await request.json()
    // console.log(body); console.log('^...body:') 

    // let { id } = params
    // id = Number(id)
    //
    //

    const positions = dbInstance.position.getAll();
    let positionForEmployee = positions[body.position_id];
    let createdEmployee = dbInstance.employee.create({
      firstname: body.firstname.toLowerCase(),
      lastname: body.lastname,
      position: positionForEmployee,
    });
    console.log(createdEmployee); console.log('^...createdEmployee:') 
    //
    // const deletingEmployee = dbInstance.employee.findFirst({
    //   where: {
    //     id: {
    //       equals: id,
    //     },
    //   },
    // })
    //
    // if (!deletingEmployee) {
    //   return new HttpResponse(null, { status: 404 })
    // }
    //
    // const deletedEmployee = dbInstance.employee.delete({
    //   where: {
    //     id: {
    //       equals: id,
    //     },
    //   },
    // })
    return HttpResponse.json({foo:'bar'})

  })
}
