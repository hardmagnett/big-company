import {defineStore} from "pinia";
import apiMain from "@/app/api/apiMain";
import type {IPosition} from "@/app/types/apiEntities";

// todo:: разобраться с WTF здесь и в других местах
export const useEmployeesStore = defineStore('WTF?', {
  actions: {
    async fetchPaginatedEmployees({page}: {page?: number} = {page: 1}) {

      let dataFromServer = await apiMain.fetch({
          method: 'get',
          url: 'employees'
        }
      )
      console.log(dataFromServer); console.log('^...dataFromServer:') 
      
    }
  }
})
