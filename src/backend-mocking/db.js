import { factory, manyOf, oneOf, primaryKey } from "@mswjs/data";
import { seedPositions } from "@/backend-mocking/db-seeding/position";
import { seedEmployees } from "@/backend-mocking/db-seeding/employee";

let lastEmployeeId = 1

export const dbInstance = factory({
  position: {
    id: primaryKey(Number),
    title: String,
    employees: manyOf("employee"),
  },
  employee: {
    id: primaryKey(() => lastEmployeeId++),
    firstname: String,
    lastname: String,
    position: oneOf("position"),
  },
});

seedPositions({ dbInstance });
seedEmployees({ dbInstance });
