import { http, HttpResponse, delay } from "msw";

import {
  getParamAsNumber,
  splitGetParamToNumberArray,
} from "@/backend-mocking/handlers/helpers.js";

const perPage = 20;

export const createGetHandler = ({ baseUrl, dbInstance }) => {
  return http.get(`${baseUrl}/employees`, async ({ request }) => {
    const url = new URL(request.url);
    const page = getParamAsNumber("page", url);

    // eslint-disable-next-line
    const position_ids = splitGetParamToNumberArray("position_ids", url);

    const whereFilter = {
      // тут будет фильтрация по тексту и выбранным должностям
    };
    if (position_ids.length) {
      whereFilter.position = {
        id: {
          // equals: 1,
          in: position_ids
        }
        
        
      }
    }

    const selectedEmployees = dbInstance.employee
      .findMany({
        where: whereFilter,
        orderBy: {
          id: "desc",
        },
        take: perPage,
        skip: perPage * (page - 1),
      })
      .map((e) => {
        let position = dbInstance.position.findFirst({
          where: {
            id: {
              equals: e.position.id,
            },
          },
        });
        return {
          id: e.id,
          firstname: e.firstname,
          lastname: e.lastname,
          position: {
            id: position.id,
          },
        };
      });

    let totalEmployeeCount = dbInstance.employee.count({
      where: whereFilter,
    });
    await delay(200)
    // await delay(1000)
    // await delay(4000)
    return HttpResponse.json({
      total_count: totalEmployeeCount,
      data: selectedEmployees,
    });
  });
};
