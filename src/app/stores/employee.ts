import {defineStore} from "pinia";
import apiMain from "@/app/api/apiMain";
import type {IPosition} from "@/app/types/apiEntities";

// todo:: разобраться с WTF здесь и в других местах
export const useEmployeesStore = defineStore('WTF?', {
  actions: {
    async fetchPaginatedEmployees({page = 1}: {page?: number}) {

      let dataFromServer = await apiMain.fetch({
          method: 'get',
          url: 'employees',
          getParams: {
            page: page,
            // todo:: убрать хардкод
            position_ids: [100, 500, 100500]
          }
        }
      )
    }
  }
})
