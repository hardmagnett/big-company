import {defineStore} from "pinia";
import apiMain from "@/app/api/apiMain";
import type {IPosition} from "@/app/types/apiEntities";

export const useEmployeesStore = defineStore('employeesStore', {
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
