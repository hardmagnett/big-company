import { http, HttpResponse} from "msw"



export const createGetHandler = ({ baseUrl, dbInstance }) => {
  return http.get(`${baseUrl}/positions`, () => {
    const allPositions = dbInstance.position.getAll();

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
