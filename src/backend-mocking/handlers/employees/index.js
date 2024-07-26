import { createGetHandler } from "./get.js";
import { createPostHandler } from "./post.js";
import { createDeleteHandler } from "./delete.js";

export const createEmployeeHandlers = ({ baseUrl, dbInstance }) => {
  return [
    createGetHandler({ baseUrl, dbInstance }),
    createPostHandler({ baseUrl, dbInstance }),
    createDeleteHandler({ baseUrl, dbInstance })
  ];
};
