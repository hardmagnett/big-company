/**
 * @baseUrl например 'https://ya.ru/' или '/api'
 */
type ConstructorParams = {
  baseUrl?: string;
};

type GetParams = Record<string, string | number | string[] | number[]>;
const convertObjectForURLSearchParams = (
  getParams: GetParams,
): Record<string, string> => {
  const convertedParams: Record<string, string> = {};
  for (const key in getParams) {
    if (Object.prototype.hasOwnProperty.call(getParams, key)) {
      const resultingKey = key.toString();
      const val = getParams[key];
      let resultingVal: string;
      if (typeof val === "number") {
        resultingVal = val.toString();
      } else if (Array.isArray(val)) {
        resultingVal = val.join(",");
      } else {
        resultingVal = val.toString();
      }
      convertedParams[resultingKey] = resultingVal;
    }
  }
  return convertedParams;
};

type FetchParams = {
  url: string;
  method: "get" | "post" | "put" | "delete";
  getParams?: GetParams;
};

class Fetchios {
  private readonly baseUrl: string;
  constructor({ baseUrl = "" }: ConstructorParams = { baseUrl: "" }) {
    this.baseUrl = baseUrl;
  }
  private _prepareUrl({
    url,
    getParams,
  }: {
    url: string;
    getParams: GetParams;
  }) {
    let finalUrl = this.baseUrl + url;
    const convertedGetParams = convertObjectForURLSearchParams(getParams);
    const searchParamsString = new URLSearchParams(
      convertedGetParams,
    ).toString();
    if (searchParamsString) {
      finalUrl = finalUrl + "?" + searchParamsString;
    }
    return finalUrl;
  }
  fetch({ url, method, getParams = {} }: FetchParams) {
    return new Promise((resolve, reject) => {
      const finalUrl = this._prepareUrl({ url, getParams });

      fetch(finalUrl, {
        method: method,
      })
        .then(function (res) {
          if (!res.ok) {
            // Если код не 2xx
            throw new Error(`HTTP ошибка! status: ${res.status}`);
          } else {
            return res.json();
          }
        })
        .then(function (data) {
          resolve(data);
        })
        .catch(function (err) {
          // Сюда попадают только сетевые ошибки (Офлайн, ошибки DNS, сети и т.п.). Например, net::ERR_FAILED.
          reject(err);
        });
    });
  }
}

export default Fetchios;