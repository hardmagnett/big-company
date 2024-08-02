import { createGetHandler } from "./get.js";
import { createPostHandler } from "./post.js";
import { createPutHandler } from "./put.js";
import { createDeleteHandler } from "./delete.js";

export const createEmployeeHandlers = ({ baseUrl, dbInstance }) => {
  return [
    createGetHandler({ baseUrl, dbInstance }),
    createPostHandler({ baseUrl, dbInstance }),
    createPutHandler({ baseUrl, dbInstance }),
    createDeleteHandler({ baseUrl, dbInstance })
  ];
};
