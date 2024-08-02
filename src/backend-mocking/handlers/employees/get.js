import { http, HttpResponse, delay } from "msw";
import capitalizeFirstLetter from "@/a-library/helpers/language/string/capitalizeFirstLetter";

import {
  getParam,
  getParamAsNumber,
  splitGetParamToNumberArray,
} from "@/backend-mocking/handlers/helpers.js";

export const createGetHandler = ({ baseUrl, dbInstance }) => {
  return http.get(`${baseUrl}/employees`, async ({ request }) => {
    const url = new URL(request.url);
    const page = getParamAsNumber("page", url);
    const perPage = getParamAsNumber("per_page", url);
    const firstname = getParam("firstname", url);

    // eslint-disable-next-line
    const position_ids = splitGetParamToNumberArray("position_ids", url);

    const whereFilter = {
      // тут будет фильтрация по тексту и выбранным должностям
    };
    if (position_ids.length) {
      whereFilter.position = {
        id: {
          in: position_ids,
        },
      };
    }
    if (firstname) {
      whereFilter.firstname = {
        // contains: firstname.toLowerCase(),
        contains: firstname,
      };
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
          // firstname: capitalizeFirstLetter(e.firstname),
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
    await delay(100);
    return HttpResponse.json({
      total_count: totalEmployeeCount,
      data: selectedEmployees,
    });
  });
};
