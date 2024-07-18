import { randomBetween } from "@/a-library/helpers/language/number/randoms";
import fable from "@/a-library/helpers/content/fable";

// todo:: вернуть 200, а лучше побольше.
const employeesQty = 200
// const employeesQty = 60

const seedEmployees = ({ dbInstance }) => {
  const positions = dbInstance.position.getAll();
  for (let id = 1; id <= employeesQty; id++) {
    let gender =
      randomBetween(0, 1, { sameRandom: true }) === 1 ? "female" : "male";

    let positionIndex = randomBetween(0, positions.length - 1, {
      sameRandom: true,
    });
    let positionForEmployee = positions[positionIndex];
    dbInstance.employee.create({
      id: id,
      firstname: fable.firstName({ gender }),
      lastname: fable.lastName({ gender }),
      position: positionForEmployee,
    });
  }
};
export { seedEmployees };
