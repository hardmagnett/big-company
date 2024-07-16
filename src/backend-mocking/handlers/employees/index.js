import {createGetHandler} from './get.js'

export const createEmployeeHandlers = ({baseUrl, dbInstance})=>{
  return [
    createGetHandler({baseUrl, dbInstance})
  ]
}
