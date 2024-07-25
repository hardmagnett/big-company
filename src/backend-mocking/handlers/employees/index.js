import { createGetHandler } from "./get.js";
import { createDeleteHandler } from "./delete.js";

export const createEmployeeHandlers = ({ baseUrl, dbInstance }) => {
  return [
    createGetHandler({ baseUrl, dbInstance }),
    createDeleteHandler({ baseUrl, dbInstance })
  ];
};
