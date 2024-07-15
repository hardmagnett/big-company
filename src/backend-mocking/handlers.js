// src/mocks/handlers.js
import { http, HttpResponse, passthrough } from 'msw'

// todo:: определять baseUrl автоматически
let baseUrl = 'http://localhost:5173/'

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  // http.get('https://example.com/user', () => {
  
  // http.get(`${baseUrl}src/`, () => {
  // http.get(`/src/*`, () => {
  //   passthrough()
  // }),
  
  
  // http.get(`${baseUrl}positions`, () => {
  http.get(`/positions`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
]
