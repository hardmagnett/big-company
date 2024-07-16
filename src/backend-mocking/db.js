import {factory, manyOf, oneOf, primaryKey} from '@mswjs/data'
import {seedPositions} from '@/backend-mocking/db-seeding/position'
import {seedEmployees} from '@/backend-mocking/db-seeding/employee'


export const dbInstance = factory({
  position: {
    id: primaryKey(Number),
    title: String,
    employees: manyOf('employee'),
  },
  employee: {
    id: primaryKey(Number),
    firstname: String,
    lastname: String,
    position: oneOf('position'),
  }
})

seedPositions({dbInstance})
seedEmployees({dbInstance})




