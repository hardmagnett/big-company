import { dbInstance } from "@/backend-mocking/db";

let baseUrl = "/api";

import { createPositionHandlers } from "@/backend-mocking/handlers/positions/index.js";
import { createEmployeeHandlers } from "@/backend-mocking/handlers/employees/index.js";

export const handlers = [
  ...createPositionHandlers({ baseUrl, dbInstance }),
  ...createEmployeeHandlers({ baseUrl, dbInstance }),
];
