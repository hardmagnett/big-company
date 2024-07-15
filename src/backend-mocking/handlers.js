// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  // http.get('https://example.com/user', () => {
  
  // todo:: вынести baseUrl в переменную
  // todo:: определять baseUrl автоматически
  http.get('http://localhost:5173/positions', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
]
