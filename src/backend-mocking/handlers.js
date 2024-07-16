// src/mocks/handlers.js
import { http, HttpResponse, passthrough } from 'msw'

import {db} from '@/backend-mocking/db'


let baseUrl = '/api'

export const handlers = [
  http.get(`${baseUrl}/positions`, () => {

    const allPositions = db.position.getAll()

    return HttpResponse.json({
      data: allPositions.map(p=>{return {
        id: p.id,
        title: p.title
      }})
    })
  }),

  http.get(`${baseUrl}/employees`, () => {

    const allEmployees = db.employee.getAll()
    

    return HttpResponse.json({
      data: [1,2,3]
    })
  }),
]
