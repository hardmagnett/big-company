import { randomBetween } from "@/a-library/helpers/language/number/randoms";
import fable from "@/a-library/helpers/content/fable";

const employeesQty = 220;

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
      firstname: fable.firstName({ gender }),
      lastname: fable.lastName({ gender }),
      position: positionForEmployee,
    });
  }
};
export { seedEmployees };
