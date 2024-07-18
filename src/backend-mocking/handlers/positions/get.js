import {delay, http, HttpResponse} from "msw"



export const createGetHandler = ({ baseUrl, dbInstance }) => {
  return http.get(`${baseUrl}/positions`, () => {
    const allPositions = dbInstance.position.getAll();


    // todo:: попробовать delay
    // await delay(1000)
    return HttpResponse.json({
      data: allPositions.map((p) => {
        return {
          id: p.id,
          title: p.title,
        };
      }),
    });
  });
};
