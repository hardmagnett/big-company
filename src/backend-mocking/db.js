import {factory, manyOf, oneOf, primaryKey} from '@mswjs/data'
import fable from '@/a-library/helpers/content/fable'
import {randomBetween} from "@/a-library/helpers/language/number/randoms";

export const db = factory({
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


let positionsRaw = [
  { id: 1, title: "IT-Менеджер" },
  { id: 2, title: "Аналитик данных" },
  { id: 3, title: "Backend-разработчик" },
  { id: 4, title: "Frontend-разработчик" },
  { id: 5, title: "IOS-разработчик" },
  { id: 6, title: "Android-разработчик" },
  { id: 7, title: "Программист 1C" },
  { id: 8, title: "UI и UX дизайнер" },
  { id: 9, title: "Администратор безопасности" },
  { id: 10, title: "DevOps-инженер" },
  { id: 11, title: "Специалист техподдержки" },
  { id: 12, title: "Тестировщик" },
  { id: 13, title: "Дата-инженер " },
  { id: 14, title: "Аналитик данных" },
  { id: 15, title: "Системный аналитик" },
]
let positions = []
for (let positionRaw of positionsRaw) {
  positions.push (db.position.create(positionRaw))
} 

for (let id = 1; id <= 200; id++) {
  let gender = randomBetween(0, 1, {sameRandom: true}) === 1 ? 'female' : 'male'
  
  let positionIndex = randomBetween(0, positions.length - 1, {sameRandom: true})
  let positionForEmployee = positions[positionIndex]
  db.employee.create({ 
    id: id, 
    firstname: fable.firstName({gender}), 
    lastname: fable.lastName({gender}), 
    position: positionForEmployee
  })
}



