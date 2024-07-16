import {createGetHandler} from './get.js'

export const createPositionHandlers = ({baseUrl, dbInstance})=>{
  return [
    createGetHandler({baseUrl, dbInstance})
  ]
}
